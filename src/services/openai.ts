import OpenAi from "openai";

const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

export const getOpenAiCompletion = async (input: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: input }],
    });

    return completion.choices[0].message?.content as string;
  } catch (error) {
    console.error(`Error completing input:${error}`);
    return "";
  }
};
