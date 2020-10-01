using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kabuce.Controllers
{
    [ApiController]
    [Route("api")]
    public class RootController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            return Ok();
        }
    }
}