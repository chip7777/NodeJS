import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();
let dir = '/';

const includeTrailingBackSlash = (dir) => {
    if (dir[dir.length]!=='/') {
        return dir+'/';
    } else { return dir; 
        }
}

const getTree = (dir) => {
    const files = fs.readdirSync(dir);
    let out='';
    if (dir!=='/') {
            out+= `<a href='_'>..</a><br>`;
        }
    files.forEach(el=>{
        out+=`<a href=${el}>${el}</a><br>`;
    });
    return out;
    
}

app.get('/',(req,res)=>{
    
    res.send(getTree(dir));
})

app.get('/:id',(req,res)=> {
    const param = req.params.id;
    if (param == '_') {
       
        dir = path.dirname(dir);
        res.redirect('back');
    } else {
        fs.stat(includeTrailingBackSlash(dir)+param, (err, stats) => {
            if (err) {
              console.error(err)
            return
            }
            if (stats.isFile()){
                res.sendFile(includeTrailingBackSlash(dir)+param);
            } else {
                dir=includeTrailingBackSlash(dir) + param;
                
                res.redirect('back');
            } 
        });
    }    
})

app.listen(3000,()=>{
    console.log('server is listen on 3000 port');
})