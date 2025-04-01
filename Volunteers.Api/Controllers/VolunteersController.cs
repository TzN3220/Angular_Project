using Microsoft.AspNetCore.Mvc;
using Volunteers.Models;
using Volunteers.Services;
namespace Volunteers.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VolunteersController : ControllerBase
    {
        private readonly ILogger<VolunteersController> _logger;
        public VolunteersController(ILogger<VolunteersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Volunteer> Get() => VolunteersService.GetAll();

        [HttpPut("{id}")]
        public Volunteer Update(Volunteer v)
        {
        return VolunteersService.Update(v);
        }
        [HttpGet("{id}")]
        public Volunteer GetById(int id)=>VolunteersService.GetById(id);
    }
}