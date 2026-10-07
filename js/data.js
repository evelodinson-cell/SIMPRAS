const KEY="simpras_db";
const DEFAULT_DB={
users:[
{id:"u1",username:"admin",password:"adminsarpras",name:"Admin Sarpras",role:"admin",org:"Sekolah",active:true},
{id:"u2",username:"osis",password:"osis123",name:"Pengurus OSIS",role:"peminjam",org:"OSIS",active:true},
{id:"u3",username:"pramuka",password:"pramuka123",name:"Pengurus Pramuka",role:"peminjam",org:"Pramuka",active:true},
{id:"u4",username:"pmr",password:"pmr123",name:"Pengurus PMR",role:"peminjam",org:"PMR",active:true}],
sarana:[
{id:"s1",name:"Proyektor",cat:"Elektronik",qty:3,avail:3,condition:"Baik",status:"Tersedia",location:"Ruang Sarpras",desc:"Proyektor untuk pembelajaran dan kegiatan organisasi"},
{id:"s2",name:"Kursi",cat:"Perabot",qty:50,avail:50,condition:"Baik",status:"Tersedia",location:"Gudang Sarpras",desc:"Kursi untuk kegiatan sekolah"},
{id:"s3",name:"Meja",cat:"Perabot",qty:25,avail:25,condition:"Baik",status:"Tersedia",location:"Gudang Sarpras",desc:"Meja untuk kegiatan sekolah"},
{id:"s4",name:"Sound System",cat:"Elektronik",qty:2,avail:2,condition:"Baik",status:"Tersedia",location:"Ruang Sarpras",desc:"Peralatan suara kegiatan sekolah"}],
prasarana:[
{id:"p1",name:"Aula Sekolah",type:"Gedung",capacity:200,condition:"Baik",status:"Tersedia",location:"Gedung Utama",desc:"Aula untuk kegiatan sekolah"},
{id:"p2",name:"Ruang Rapat",type:"Ruangan",capacity:30,condition:"Baik",status:"Tersedia",location:"Gedung Utama",desc:"Ruangan rapat organisasi"},
{id:"p3",name:"Lapangan",type:"Fasilitas Olahraga",capacity:300,condition:"Baik",status:"Tersedia",location:"Area Sekolah",desc:"Lapangan kegiatan olahraga"}],
requests:[],notifications:[],activities:[]};
function db(){let x=localStorage.getItem(KEY);if(!x){localStorage.setItem(KEY,JSON.stringify(DEFAULT_DB));return structuredClone(DEFAULT_DB)}try{return JSON.parse(x)}catch(e){localStorage.removeItem(KEY);return db()}}
function save(x){localStorage.setItem(KEY,JSON.stringify(x))}
