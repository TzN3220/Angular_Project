using MyServer;
using voluteerApi.controller;
using Microsoft.AspNetCore.Mvc;
using MyServer;
namespace service;
public class VolunteerService{
    private static Volunteer[] volunteers=new Volunteer[]
    {
        new Volunteer{id=1,first_name="noa",last_name="ttt",days_work=new bool[5]},
        new Volunteer{id=2,first_name="leli",last_name="zzzz",days_work=new bool[5]},
        new Volunteer{id=3,first_name="shosh",last_name="kkk",days_work=new bool[5]},
        new Volunteer{id=4,first_name="Lea",last_name="ggg",days_work=new bool[5]},
         new Volunteer{id=5,first_name="Tut",last_name="jjj",days_work=new bool[5]},
    };
    

    
    private static int[] _idOfVoluteer=new int[5];

    public static Volunteer[] GetAll(){return volunteers;}
    public static Volunteer GetById(int id){
        for(int i=0;i<4;i++){
            if(volunteers[i].id==id){
                Console.WriteLine("succsess");
                return volunteers[i];
            }
        }
        return null;
    }
     public static Volunteer[] update(Volunteer volunteer){
        for(int i=0;i<6;i++){
            if(volunteers[i].id==volunteer.id){
                Console.WriteLine("succsess");
                for(int j=0;j<5;j++){
                    volunteers[i].days_work[j]=volunteer.days_work[j];
                }
            }
        }
        return volunteers;
    }
    public static int[] update(int[] d){
        for (int i = 0; i < 5; i++)
         {
            _idOfVoluteer[i]=d[i];
         }
         return _idOfVoluteer;
    }
    
    }
