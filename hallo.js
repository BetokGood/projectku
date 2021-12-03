[17.22, 9/11/2021] ?: <script type="text/javascript">
 function gantiMenu(menu){
 if (menu == "list-data"){
 muatDaftarData();
 $('#tambah-data').hide();
 $('#list-data').fadeIn();
$('#edit-data').hide();
 }
[17.22, 9/11/2021] ?: else if (menu == "tambah-data"){
 $('#tambah-data').fadeIn();
 $('#list-data').hide();
$('#edit-data').hide();
 }else if (menu == "edit-data"){
 $('#edit-data').fadeIn();
 $('#tambah-data').hide();
 $('#list-data').hide();
 }
 }
 </script>
[17.23, 9/11/2021] ?: function muatDaftarData(){
 if (localStorage.daftar_data && localStorage.id_data){
 
 daftar_data = JSON.parse(localStorage.getItem('daftar_data'));
 
 var data_app = "";
[17.23, 9/11/2021] ?: if (daftar_data.length > 0){
 data_app = '<table class="table">';
 data_app += '<thead>'+
 '<th>ID</th>'+
 '<th>nama</th>'+
 '<th>alamat beli</th>'+
 '<th>ket</th>'+
 '<th>aksi</th>'+
 '<th>aksi 2</th>'+
 '</thead><tbody>';
 
 for (i in daftar_data){
 data_app += '<tr>';
 data_app += '<td>'+ daftar_data[i].id_data + ' </td>'+
 '<td>'+ daftar_data[i].nama + ' </td>'+
 '<td>'+ daftar_data[i].alamat + ' </td>'+
 '<td>'+ daftar_data[i].ket + ' </td>'+
 '<td><a class="btn btn-danger btn-small" href="javascript:void(0)" onclick="hapusData(\''+
daftar_data[i].id_data+'\')">Hapus</a></td>'+
 '<td><a class="btn btn-warning btn-small" href="javascript:void(0)" onclick="editData(\''+d
aftar_data[i].id_data+'\')">Edit</a></td>';
 data_app += '</tr>';
[17.23, 9/11/2021] ?: }
 data_app += '</tbody></table>';
 
 }
 else {
 data_app = "Tidak ada data...";
 }
 
 
 $('#list-data').html(data_app);
 $('#list-data').hide();
 $('#list-data').fadeIn(100);
 }
 }
function editData(id){
 if (localStorage.daftar_data && localStorage.id_data){
 daftar_data = JSON.parse(localStorage.getItem('daftar_data'));
idx_data = 0;
 for (i in daftar_data){
[17.23, 9/11/2021] ?: daftar_data = JSON.parse(localStorage.getItem('daftar_data'));
 id_data = parseInt(localStorage.getItem('id_data'));
 }
 else {
 daftar_data = [];
 id_data = 0;
 }
 id_data ++;
 daftar_data.push({'id_data':id_data, 'nama':nama, 'alamat':alamat, 'ket':ket});
 localStorage.setItem('daftar_data', JSON.stringify(daftar_data));
 localStorage.setItem('id_data', id_data);
 document.getElementById('form-data').reset();
 gantiMenu('list-data');
 
 return false;
 }
 function simpanEditData(){
 id_data = $('#eid_data').val();
 nama = $('#enama').val();
 alamat = $('#ealamat').val();
[17.24, 9/11/2021] ?: ket = $('#eket').val();
 
 daftar_data.push({'id_data':id_data, 'nama':nama, 'alamat':alamat, 'ket':ket});
 localStorage.setItem('daftar_data', JSON.stringify(daftar_data));
 document.getElementById('eform-data').reset();
 gantiMenu('list-data');
 
 return false;
 }
 
 function hapusData(id){
 if (localStorage.daftar_data && localStorage.id_data){
 daftar_data = JSON.parse(localStorage.getItem('daftar_data'));
 
 idx_data = 0;
 for (i in daftar_data){
 if (daftar_data[i].id_data == id){
 daftar_data.splice(idx_data, 1);
 }
 idx_data ++;
 [17.24, 9/11/2021] ?: localStorage.setItem('daftar_data', JSON.stringify(daftar_data));
 muatDaftarData();
 }
 }