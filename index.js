// inisialisasi modul http
const http = require('http');

// buat server
const server = http.createServer((req, res)=>
{
    // res.writeHead(200,{'content-Type': 'text/html'});
    //res.write('Selamat pagi');
    //res.end();

    res.writeHead(200,{'content-Type':'application/json'})

    if(req.url === '/dosen'){
        message = 'List data dosen';
        data = ['Ahmad','Hafiz','Yanto'];
    }else if(req.url === '/mahasiswa'){
        message = 'list data mahasiswa';
        data = ['nabila','eric'];
    }else{
        message = 'tidak ditemukan';
        data = [];
    }
    res.write(JSON.stringify({
        'message' : message,
        'data' : data,
        'status'  : 'succes'
    }));
    res.end();
} );

const port = 3000;
const host ='localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
} );



