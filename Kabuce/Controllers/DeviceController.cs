using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Kabuce.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/devices")]
    public class DeviceController : ControllerBase
    {
    }
}