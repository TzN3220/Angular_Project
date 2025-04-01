using Volunteers.Models;
namespace Volunteers.Services;
public static class SchedulingService
{
    public static int[]? Schedule { get; set; }
    static SchedulingService() => Schedule = new int[7]{4,3,2,1,3,1,0};
    public static void Update(int[] updated) 
    {
    Schedule = updated;
    Console.WriteLine(Schedule[0]);
    Console.WriteLine(Schedule[1]);
    Console.WriteLine(Schedule[2]);
    Console.WriteLine(Schedule[3]);
    Console.WriteLine(Schedule[4]);
    Console.WriteLine(Schedule[5]);
    Console.WriteLine(Schedule[6]);

    }
    public static int[] Get() => Schedule;

}