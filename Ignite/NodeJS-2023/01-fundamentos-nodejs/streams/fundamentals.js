// Netflix & Spotify

// Importação de clientes CSV (Excel)
// 1gb - 1.000.000 de linhas
// POST /upload import.csv
// Velocidade do upload é de 10mb/s então pra carregar um arquivo de 1gb levaria 100s => inserção no banco de dados

// Com  o stream, assim que receber os primeiros 10mb ele já insere no banco de dados, e assim que receber mais 10mb ele vai inserindo no banco de dados

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if(i > 100) {
                this.push(null)
            } else {
                const buf =  Buffer.from(String(i))
                
                this.push(buf)
            }
            
        }, 1000)

    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(chunk.toString() * 10)
        callback()
    }
}


new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())