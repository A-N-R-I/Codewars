using System.Collections.Generic;

partial class Kata
{
    public static IEnumerable<string> OpenOrSenior(int[][] data)
    {
        var result = new List<string>(data.Length);

        foreach (int[] info in data)
        {
            result.Add(info[0] >= 55 && info[1] > 7? "Senior" : "Open");
        }

        return result;
    }
}