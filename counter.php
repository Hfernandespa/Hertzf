<?php
// Arquivo: counter.php
// Configurações do arquivo de contador
$file = 'counter.txt';
$directory = dirname(__FILE__);

// Verifica se o arquivo existe, se não existir, cria com valor 0
if (!file_exists($file)) {
    file_put_contents($file, 0);
}

// Bloqueia o arquivo para evitar condições de corrida
$fp = fopen($file, 'r+');
if (flock($fp, LOCK_EX)) {
    // Lê o valor atual
    $count = (int)fread($fp, filesize($file));
    
    // Incrementa o contador
    $count++;
    
    // Volta ao início do arquivo
    rewind($fp);
    
    // Escreve o novo valor
    fwrite($fp, $count);
    
    // Libera o bloqueio
    flock($fp, LOCK_UN);
} else {
    // Não foi possível bloquear o arquivo, lê o valor atual sem incrementar
    $count = (int)fread($fp, filesize($file));
}

fclose($fp);

// Retorna o contador como JSON
header('Content-Type: application/json');
echo json_encode(['count' => $count]);
?>
