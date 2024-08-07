const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

(async () => {
  const { customAlphabet } = await import('nanoid');
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const length = 6;

  const generateRandomNumber = customAlphabet(alphabet, length);

  const generateRandomCode = () => {
    return generateRandomNumber();
  };

  const CreateCode = async (data) => {
    try {
      const pCodeRes = data;  // For demo purpose
      return { message: "Pair Code Created!", data: pCodeRes };
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };

  app.get("/api/pair-code", async (req, res) => {
    const randomNumber = generateRandomCode();
    const data = {
      code: randomNumber,
    };
    const createdCode = await CreateCode(data);
    return res.status(200).json({
      status: true,
      createdCode,
    });
  });

  app.listen(3000, () => {
    console.log("Server connected successfully");
  });
})();
