import { Request, Response } from 'express'

class CreateMessageController {
    async handle(req: Request, res: Response) {
        const { message } = req.body
        
    }
}

export { CreateMessageController }