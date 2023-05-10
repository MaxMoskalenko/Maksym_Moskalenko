import express, { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';

class Controller {
  async uploadFile(req: Request, res: Response): Promise<void> {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const dir = './uploads';
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        cb(null, dir);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    });

    const upload = multer({ storage }).single('file');

    upload(req, res, function (err) {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send('File uploaded successfully');
      }
    });
  }

  async getFileMetadata(req: Request, res: Response): Promise<void> {
    const filename = req.query.filename as string;
    const path = `./uploads/${filename}`;
    fs.stat(path, (err, stats) => {
      if (err) {
        res.status(404).send('File not found');
      } else {
        res.send({
          filename,
          size: stats.size,
          created: stats.birthtime,
          modified: stats.mtime
        });
      }
    });
  }

  async deleteFile(req: Request, res: Response): Promise<void> {
    const filename = req.query.filename as string;
    const path = `./uploads/${filename}`;
    fs.unlink(path, (err) => {
      if (err) {
        res.status(404).send('File not found');
      } else {
        res.send('File deleted successfully');
      }
    });
  }
}

const app = express();
const port = 3002;

const controller = new Controller();

app.use(express.json());

app.post('/upload', controller.uploadFile.bind(controller));
app.get('/file', controller.getFileMetadata.bind(controller));
app.delete('/file', controller.deleteFile.bind(controller));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
