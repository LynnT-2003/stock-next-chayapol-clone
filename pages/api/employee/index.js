import path from 'path';
import { promises as fs } from 'fs';
export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/employees.json', 'utf8');
  try {
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}