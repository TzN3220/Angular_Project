using Microsoft.AspNetCore.Mvc;
using MyServer;
using service;
using static service.VolunteerService;
namespace voluteerApi.controller;

[ApiController]
[Route("api/[controller]")]
public  class voluteerController: ControllerBase{
     [HttpGet]
    public Volunteer[] Get(){
        return VolunteerService.GetAll();
    }
    [HttpGet("{id}")]
    public Volunteer? GetById(int id){
        return VolunteerService.GetById(id);
    }
    [HttpPut]
    public Volunteer [] Put([FromBody]Volunteer volunteer){
        return VolunteerService.update(volunteer);
    }
}
