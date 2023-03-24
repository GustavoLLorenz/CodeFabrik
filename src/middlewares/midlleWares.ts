import { Request, Response, NextFunction } from 'express';

const cpfCnpjRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/


export function validateUserCreate(req: Request, res: Response, next: NextFunction) {
  console.log('vim no middle')
  const { user_name , cpf_cnpj } = req.body
  if (user_name.length < 3) {
    return res.status(400).json({
       message: 'O Nome deve ter no mínimo 3 caracteres!'
    });
  }

  if( !cpfCnpjRegex.test(cpf_cnpj)) {
    return res.status(401).json({
      message: 'CPF/CNPJ inválido',
    });
  }

  next();
}