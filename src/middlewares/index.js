import express from 'express'

const setupMiddlewares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(logger)
}
export default setupMiddlewares;