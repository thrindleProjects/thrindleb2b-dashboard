// import { promises as fs } from 'fs';
// "postinstall": "node node_modules/puppeteer/install.js",
import chromium from '@sparticuz/chromium';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import pug from 'pug';
import { PuppeteerLaunchOptions } from 'puppeteer';
// import path from 'path';
import puppeteer from 'puppeteer-core';

import logger from '@/lib/logger';

import { isLocal, isProd, POST_METHOD } from '@/constant';

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

      // browser = await chromium.puppeteer.launch({
      //   args: chromium.args,
      //   defaultViewport: chromium.defaultViewport,
      //   executablePath: await chromium.executablePath,
      //   headless: chromium.headless,
      //   ignoreHTTPSErrors: true,
      // });

      // console.log({ val: process.env.CHROME_EXECUTABLE_PATH });
      // console.log('before');

      // const browser = await puppeteer.launch({
      //   args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      //   executablePath:
      //     process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),

      let launchOptions: PuppeteerLaunchOptions = {};

      if (isProd) {
        launchOptions = {
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath:
            process.env.CHROME_EXECUTABLE_PATH ||
            (await chromium.executablePath()),
          headless: chromium.headless,
        };
      }

      if (isLocal) {
        launchOptions = {
          headless: 'new',
          executablePath: process.env.CHROME_EXECUTABLE_PATH,
        };
        // {
        //   args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
        //   headless: 'new',
        //   executablePath: process.env.CHROME_EXECUTABLE_PATH,
        // };
      }

      const browser = await puppeteer.launch(launchOptions);

      //   // defaultViewport: chromium.defaultViewport,
      //   headless: true,
      //   ignoreHTTPSErrors: true,
      // });
      // console.log('after');
      // const browser = await puppeteer.launch({
      //   headless: 'new',
      //   args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // });
      // console.log('new');
      const page = await browser.newPage();
      // // console.log('after new');

      // set our compiled html template as the pages content
      // then waitUntil the network is idle to make sure the content has been loaded
      // console.log('set content');
      await page.setContent(invoice, { waitUntil: 'networkidle0' });

      // // console.log('set after content');
      // await page.emulateMediaType();
      // await page.emulateMediaFeatures();

      // convert the page to pdf with the .pdf() method
      const pdf = await page.pdf({ format: 'A4', printBackground: true });
      await browser.close();

      // // send the result to the client
      res.setHeader('Content-Length', Infinity);
      res.setHeader('Content-Type', 'application/pdf');
      res.statusCode = 200;
      res.send(pdf);

      return;
    }

    throw new Error('method not implemented');
  } catch (err) {
    logger(err);

    if (err instanceof Error) {
      return res
        .status(400)
        .json({ message: 'Something went wrong', err: err.message });
    }

    return res.status(400).json({ message: 'Something went wrong' });
  }
};

export default getOrderReciept;
