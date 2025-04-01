using Volunteers.Models;
namespace Volunteers.Services
{
    public static class VolunteersService
    {
        static List<Volunteer> VolunteersDB { get; }
        static VolunteersService()
        {

            VolunteersDB = new List<Volunteer>
            {
                new() { Id=1,Name= "Shoshi Shushan", Address= "Rabbi Akiva 15",Tel= "055-6727826",
                    IsActive= true,WantArr=new bool[7] },
                new() { Id= 2,Name= "Sari Volpo", Address= "Rashbi 15", Tel= "055-6765562",
                    IsActive= true, WantArr=new bool[7] },
                new Volunteer{ Id= 3,Name= "Rivki Dan", Address= "Rabbi Akiva 150", Tel= "055-6799793",
                    IsActive= true,  WantArr=new bool[7] },
                new Volunteer{ Id= 4,Name= "Racheli Vinter", Address="Rabbi Akiva 165", Tel= "0504105353",
                    IsActive= false, WantArr= new bool[7]}
            };

        }
        
            public static List<Volunteer> GetAll() {
              return VolunteersDB;  
            } 

            public static Volunteer Update(Volunteer volunteer)
            {
                var index = VolunteersDB.FindIndex(v => v.Id == volunteer.Id);
                if (index == -1){
                    return null;
                Console.WriteLine("Volunteers wasnt found");
   
                }
                VolunteersDB[index] = volunteer;
                Console.WriteLine(VolunteersDB[index].Name);
                Console.WriteLine(VolunteersDB[index].WantArr[0]);
                Console.WriteLine(VolunteersDB[index].WantArr[1]);
                Console.WriteLine(VolunteersDB[index].WantArr[2]);
                Console.WriteLine(VolunteersDB[index].WantArr[3]);
                Console.WriteLine(VolunteersDB[index].WantArr[4]);
                Console.WriteLine(VolunteersDB[index].WantArr[5]);
                Console.WriteLine(VolunteersDB[index].WantArr[6]);

                return volunteer;
            }

            public static Volunteer GetById(int id){
                return VolunteersDB.FirstOrDefault(Volunteers=>Volunteers.Id==id);
            }

        }
    } 