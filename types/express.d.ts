import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // กำหนดประเภทที่เหมาะสม เช่น { id: string, role: string }
    }
  }
}