import { z } from 'zod';


export const createUserSchema = z.object({ 

    body: z.object({ 
        name: z.string({ required_error: 'O campo "nome" é obrigatório' })
        .min(3, { message: 'O campo "nome" deve ter pelo menos 3 caracteres' }),

        email: z.string({ required_error: 'O campo "email" é obrigatório' })
        .email({ message: 'O campo "email" deve ser um email válido' }),
        
        password: z.string({ required_error: 'O campo "senha" é obrigatório' })
        .min(6, { message: 'O campo "senha" deve ter pelo menos 6 caracteres' }),
        
  }),   
});

export const updateUserSchema = z.object({
  
    body: z.object({
       name: z.string().min(3,'O nome dever ter no minimo 3 caracteres').optional(),    
       email: z.string().email('O email deve ser valido').optional(),
    }),
});