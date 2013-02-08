using System;
using System.Linq;
 
class Program
{
    static void Main(string[] args)
    {
            Enumerable.Range(1, 100).ToList().ForEach(i => Console.WriteLine(i%3 == 0 ? i%5 == 0 ? "FizzBuzz" : "Fizz" : i%5 == 0 ? "Buzz" : i.ToString()));
    }
}