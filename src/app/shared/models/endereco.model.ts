export class Endereco {

constructor (
        public id?: number,
        public rua?: string,
        public numero?: number,
        public complemento?: String,
        public bairro?: String,
        public cep?: String,
        public cidade?: String,
        public estado?: String
     ) {}
}