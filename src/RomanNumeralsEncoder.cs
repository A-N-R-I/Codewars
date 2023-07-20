using System;
using System.Collections.Generic;
using System.Text;

partial class Kata
{
    public static string Solution(int n)
    {
        // Input validation
        if (n < 0 || n > 3999) throw new ArgumentOutOfRangeException(nameof(n),"Argument must be within the range 0 - 3999.");

        string str = n.ToString();
        StringBuilder sb = new();

        // The basic roman numerals for the range 1 - 3999, needed to construct the others
        Dictionary<int, char> numerals = new() { {1, 'I'}, {5, 'V'}, {10, 'X'}, {50, 'L'}, {100, 'C'}, {500, 'D'}, {1000, 'M'} };

        // To keep track of the power of 10
        int index = str.Length - 1;

        foreach (char charDigit in str)
        {
            // (i - 48) uses unicode offset to retrun the integer represented by the char
            int digit = charDigit - 48;

            if (digit > 0)
            {
                int placeValue = (int)Math.Pow(10, index);
                int value = placeValue * digit;
                // the number that determines which pattern to use when writting the roman numeral
                int benchmark = placeValue * (digit > 1? 5 : 1);
                // Distance of the value from the benchmark. Goes together with benchmark in determining the writing pattern
                int interval = Math.Abs(benchmark - value)/placeValue;

                if (benchmark > value)
                    sb.Append(interval != 1? new string(numerals[placeValue], digit) : $"{numerals[placeValue]}{numerals[value + placeValue]}");
                else if (benchmark < value)
                    sb.Append(interval != 4? $"{numerals[benchmark]}" + new string(numerals[placeValue], interval) : $"{numerals[placeValue]}{numerals[value + placeValue]}");
                else
                    sb.Append(numerals[benchmark]);
            }
            index--;
        }
        return sb.ToString();
    }
}