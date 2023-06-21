using System.Text;


partial class Kata
{
    public static string SpinWords(string sentence)
    {
        StringBuilder sb = new(sentence.Length);

        foreach (string word in sentence.Split())
        {
            if (word.Length >= 5)
            {
                for (int i = word.Length - 1; i >= 0; i--)
                    sb.Append(word[i]);
                // Append a space character after a word
                sb.Append(' ');
            }
            else sb.Append($"{word} ");
        }
        // Return the string stored, after removing the whitespace inserted last
        return sb.Remove(sb.Length-1, 1).ToString();
    }
}