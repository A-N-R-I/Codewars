using System;
using System.Text;

public partial class Kata
{
    public static string ToCamelCase(string str)
    {
        StringBuilder sb = new(str.Length);

        sb.Append(str[0]);
        for (int i = 1; i < str.Length; ++i)
        {
            if (str[i] != '-' && str[i] != '_')
                sb.Append()
        }

        return sb.ToString();
    }
}