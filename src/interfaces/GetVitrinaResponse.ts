export type GetVitrinaResponse = {
    value:   Value[];
    errors:  string[];
    success: boolean;
}

export type Value = {
    id:          string;
    cartaId:     string;
    precioCop:   number;
    descripcion: string;
    descuento:   number;
    categoriaId: number;
    cantidad:    number;
}
