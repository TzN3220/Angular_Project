using Microsoft.AspNetCore.Mvc;
using MyServer;
using service;
namespace voluteerApi.controller;
[ApiController]
[Route("api/[controller]")]
public  class SchedulingController: ControllerBase{
    private int[] s={0,0,0,0,0};
    [HttpGet] 
    public int[] Get(){
       return s;
    }
     [HttpPut]
    public int[] Put([FromBody]int[] days){
        return VolunteerService.update(days);
    }
}