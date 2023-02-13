
class No {
    
    constructor(valor) {
        this._dado = valor;
        this._filhoEsquerdo = null;
        this._filhoDireito = null;
    }

    get dado() {
      return this._dado;
    }

    set dado(valor) {
      this._dado = valor;
    }

    get filhoEsquerdo() {
      return this._filhoEsquerdo;
    }

    set filhoEsquerdo(valor) {
      this._filhoEsquerdo = valor;
    }
    
    get filhoDireito() {
      return this._filhoDireito;
    }

    set filhoDireito(valor) {
      this._filhoDireito = valor;
    }
    
    insert(valor) {
        
        if(valor < this.dado) {
            if(this.filhoEsquerdo == null) {
                let novoNo = new No(valor);
                this.filhoEsquerdo = novoNo;
                return;
            } else {
                this.filhoEsquerdo.insert(valor);
                return;
            }
        } else {
            if(this.filhoDireito == null) {
                let novoNo = new No(valor);
                this.filhoDireito = novoNo;
                return;
            } else {
                this.filhoDireito.insert(valor);
                return;
            }
        }
    } 
    
    delete(valor) {
         
        if(valor < this.dado) {
            this.filhoEsquerdo = this.filhoEsquerdo.delete(valor);
            return this;
        } else if(valor > this.dado) {
            this.filhoDireito = this.filhoDireito.delete(valor);
            return this;
        } else {
            if(this.filhoEsquerdo == null && this.filhoDireito == null) {
                return null;
            }
 
            if(this.filhoEsquerdo == null) {
                return this.filhoDireito;
            } else if(this.filhoDireito == null) {
                return this.filhoEsquerdo;
            }
 
            var noAuxiliar = this.menorValor(this.filhoDireito);
            this.dado = noAuxiliar.dado;
 
            this.filhoDireito = this.delete(noAuxiliar.dado);
            return this;
        }
    }
 
    menorValor(no) {

        if(no.filhoEsquerdo === null) {
            return no;
        } else {
            return this.menorValor(no.filhoEsquerdo);
        }
    }
    
    search(valor) {

        if (valor == this.dado) {
            console.log(valor + ' pertence à árvore.');
            return;
        } else if (valor < this.dado) {
            if (this.filhoEsquerdo == null) {
                console.log(valor + ' não pertence à árvore.');
                return;
            } else {
                return this.filhoEsquerdo.search(valor);
            }
        } else if (valor > this.dado) {
            if (this.filhoDireito == null) {
                console.log(valor + ' não pertence à árvore.');
                return;
            } else {
                return this.filhoDireito.search(valor);
            }
        }
        console.log(valor + ' não pertence à árvore.');
        return;
    }    
    
    exibirPreOrdem() {

        console.log(this._dado + " ");

        if (this._filhoEsquerdo != null) {
            this._filhoEsquerdo.exibirPreOrdem();
        }

        if (this._filhoDireito != null) {
            this._filhoDireito.exibirPreOrdem();
        }
    }
    
    exibirEmOrdem() {
        

        if (this._filhoEsquerdo != null) {
            this._filhoEsquerdo.exibirEmOrdem();
        }

        console.log(this._dado + " ");
        
        if (this._filhoDireito != null) {
            this._filhoDireito.exibirEmOrdem();
        }
    }
    
    exibirPosOrdem() {
        

        if (this._filhoEsquerdo != null) {
            this._filhoEsquerdo.exibirPosOrdem();
        }

        if (this._filhoDireito != null) {
            this._filhoDireito.exibirPosOrdem();
        }
        
        console.log(this._dado + " ");
    }
    
}