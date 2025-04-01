using Microsoft.AspNetCore.Mvc;
using Volunteers.Services;
using Volunteers.Models;
namespace Volunteers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchedulingController : ControllerBase
    {

        [HttpGet]
        public int[] Get()
        {
            return SchedulingService.Get();
        }

        

        [HttpPut]
        public void Put([FromBody] int[] updated)
        {
           SchedulingService.Update(updated);
        }

       
    }
}
