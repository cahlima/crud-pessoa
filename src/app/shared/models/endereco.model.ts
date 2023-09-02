export class Endereco {

constructor (
        public id?: number,
        public rua?: string,
        public numerocasa?: number,
        public complemento?: string,
        public bairro?: string,
        public cep?: string,
        public cidade?: string,
        public estado?: string,
        public residencial?: boolean
        ) {}

}