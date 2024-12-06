<?php
// Conexão com o banco de dados MySQL
$servername = "localhost"; // Endereço do servidor
$username = "root"; // Nome de usuário
$password = 'P@$$w0rd'; // Senha
$dbname = "usuarios"; // Nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obtém os valores enviados pelo formulário
$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"];

// Prepara a instrução SQL para inserir os dados
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

// Executa a inserção e verifica se deu certo
if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso!";
} else {
    echo "Erro ao inserir os dados: " . $conn->error;
}

// Fecha a conexão
$conn->close();
?>