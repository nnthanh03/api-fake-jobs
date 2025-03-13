const express = require("express");
const { v1: uuidv1 } = require("uuid");

const app = express();
const port = 8181;

// Mock database
const col_jobid = [496, 1533, 606, 336, 1197, 1400, 440, 760, 2026, 258, 1530, 1529, 1527, 1677, 1531, 273, 1103, 98, 1532, 188, 1981, 1534, 996, 187, 463, 192, 1130, 339, 1632, 179, 1893, 1592, 90, 1686, 213, 119, 1109, 737, 1871, 1602, 311, 1280, 285, 493, 1119, 197, 2009, 990, 379, 1710, 122, 357, 1005, 1886, 355, 1488, 1391, 1086, 858, 1156, 2051, 1447, 1681, 1644, 1218, 1196, 1634, 1723, 206, 263, 538, 0, 1539, 769, 125, 2002, 974, 512, 885, 1414, 1210, 1945, 672, 731, 1688, 1656, 1565, 671, 81, 76, 1806, 1497, 679, 247, 245, 782, 1285, 252, 458, 1616, 1822, 969, 505, 1059, 1343, 1257, 1430, 1078, 1997, 926, 1663, 212, 1169, 952, 481, 1144, 1849, 1791, 272, null];
const col_customtrack = ['conversion', 'redirect', 'click', 'unqualified', 'alive', 'qualified', 'interview_scheduled', '0', 'superpixel', null];
const col_bid = [1, 7, 2, 0, null];
const col_campaignid = [222, 93, 232, 1, 13, 57, 48, 15, 4, 151, 79, 144, 122, 58, 12, 61, 53, 141, 33, 5, 63, 97, 101, 178, 54, 55, 193, 223, 59, 117, 9, 51, 70, 8, 10, 198, null];
const col_groupid = [34, 28, 27, 16, 19, 10, 21, 11, 22, 13, 41, 32, 12, 15, 14, 35, 25, 17, 37, 26, 31, null];
const col_publisherid = [1, 5, 3, 20, 15, 35, 33, 12, 22, 23, 11, 13, 9, 30, 27, 17, 34, 16, 24, 29, 2, 38, 31, 37, 10, 32, 36, 28, null];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)] || 0;
}

app.get('/', (req, res) => {
    res.send(serverMessage);
  });

// Route trả về danh sách items
app.get("/items", (req, res) => {
    const now = new Date();
    const items = {
        ts: now.toISOString().slice(0, 19).replace("T", " "),  // Format YYYY-MM-DD HH:mm:ss
        job_id: getRandomElement(col_jobid),
        custom_track: getRandomElement(col_customtrack),
        bid: getRandomElement(col_bid),
        campaign_id: getRandomElement(col_campaignid),
        group_id: getRandomElement(col_groupid),
        publisher_id: getRandomElement(col_publisherid),
    };
    res.json([items]);
});

const serverMessage = `
  <html>
    <head>
      <title>API SERVER</title>
    </head>
    <body>
      <h1>Server is running</h1>
    </body>
  </html>
`;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  

  app.get('/', (req, res) => {
    res.send(serverMessage);
  });
});
