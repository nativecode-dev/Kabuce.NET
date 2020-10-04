using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CouchDB.Driver.Exceptions;
using Humanizer;
using Kabuce.Documents;
using Kabuce.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Kabuce.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/organizations")]
    public class OrganizationController : ControllerBase
    {
        private readonly DataContext _context;

        private readonly IEnumerable<Organization> _emptyOrganizations = new Organization[] { };

        public OrganizationController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Organization>), StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            try
            {
                var organizations = _context.Organizations.ToList();

                return Ok(organizations);
            }
            catch (Exception)
            {
                return UnprocessableEntity(_emptyOrganizations);
            }
        }

        [HttpGet("{domain}")]
        [ProducesResponseType(typeof(Organization), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Organization), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetSingle([FromRoute] string domain)
        {
            try
            {
                var organization = await _context.Organizations.FindAsync(domain);

                return Ok(organization);
            }
            catch (CouchNotFoundException)
            {
                return NotFound(domain);
            }
        }

        [HttpPatch("{domain}")]
        [ProducesResponseType(typeof(Organization), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Patch([FromRoute] string domain, [FromBody] JsonPatchDocument<Organization> patch)
        {
            if (patch == null) return BadRequest(ModelState);

            var id = domain.Dasherize();

            var organization = await _context.Organizations.FindAsync(id);

            if (organization == null)
            {
                return NotFound(domain);
            }

            patch.ApplyTo(organization, ModelState);

            if (ModelState.IsValid == false) return BadRequest(ModelState);

            var updated = await _context.Organizations.AddOrUpdateAsync(organization);

            return Ok(updated);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Organization), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(Organization), StatusCodes.Status409Conflict)]
        [ProducesResponseType(typeof(Organization), StatusCodes.Status422UnprocessableEntity)]
        public async Task<IActionResult> Post([FromBody] Organization request)
        {
            try
            {
                var id = request.Domain.Dasherize();

                var organization = await _context.Organizations.FindAsync(id);

                if (organization == null)
                {
                    request.Id = id;

                    var created = await _context.Organizations.AddAsync(request);

                    return Created(Request.GetDisplayUrl(), created);
                }

                return Conflict(organization);
            }
            catch (Exception)
            {
                return UnprocessableEntity(request);
            }
        }
    }
}