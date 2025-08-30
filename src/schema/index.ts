import {z} from 'zod';

export const OrderSchema = z.object({
    name: z.string().min(1, "Tu nombre es requerido").max(100),
    total: z.number().min(1, "Hay errores en la orden"),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
});

export const OrderIdSchema = z.object({
    orderId: z.string().transform((val) => parseInt(val)).refine(val => val > 0, {message: "hay errores"})
})

export const SearchSchema = z.object({
    search: z.string().trim().min(1, {message: 'La busqueda no puede ir vacia'})
})