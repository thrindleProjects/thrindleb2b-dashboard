// import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
// import path from 'path';
import path from 'path';
import pug from 'pug';
import puppeteer from 'puppeteer';

import logger from '@/lib/logger';

import { POST_METHOD } from '@/constant';

const getOrderReciept = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === POST_METHOD) {
      // read our invoice-template.html file using node fs module
      // const file = fs.readFileSync('./invoice-template.html', 'utf8');

      const templatesBasePath = path.join(process.cwd(), 'src/templates');

      // const file = await fs.readFile(templatesBasePath + '/orderReciept.pug', 'utf8');

      const invoice = pug.renderFile(templatesBasePath + '/orderReciept.pug', {
        ...req.body,
      });

      // compile the file with handlebars and inject the customerName variable
      // const template = pug.compile(`${file}`);
      // const html = template({ customerName });

      // simulate a chrome browser with puppeteer and navigate to a new page
      const browser = await puppeteer.launch({
        headless: 'new',
      });
      const page = await browser.newPage();

      // set our compiled html template as the pages content
      // then waitUntil the network is idle to make sure the content has been loaded
      await page.setContent(invoice, { waitUntil: 'networkidle0' });
      await page.emulateMediaType();
      await page.emulateMediaFeatures();

      // convert the page to pdf with the .pdf() method
      const pdf = await page.pdf({ format: 'A4', printBackground: true });
      await browser.close();

      // send the result to the client
      res.setHeader('Content-Length', Infinity);
      res.setHeader('Content-Type', 'application/pdf');
      res.statusCode = 200;
      res.send(pdf);

      return;
    }

    throw new Error('method not implemented');
  } catch (err) {
    logger(err);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    res
      .status(400)
      .json({ message: 'Something went wrong', err: err?.message, new: err });
  }
};

export default getOrderReciept;
