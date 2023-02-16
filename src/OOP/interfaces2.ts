type DefaultResponse = {
    id: (string|number),
    name: string,
    createdAt: string
}

type ID = (string|number)
type InputDto = {name: string, active: boolean}

interface Repository {
    readonly model: any;
    findAll(): DefaultResponse[]
    findById(id: ID): DefaultResponse
    insert(data: InputDto): DefaultResponse
    update(id: ID, data: InputDto): DefaultResponse
    destroy(id: ID): boolean
}

export {}