<?php
// Conexão com o banco de dados MySQL
$servername = "localhost"; // Endereço do servidor
$username = "root"; // Nome de usuário
$password = 'P@$$w0rd'; // Senha
$dbname = "usuarios"; // Nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão
if($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obtendo os dados do formulário
$nome = $_POST["nome"];
$senha = $_POST["senha"];

// Prepara e executa a consulta
$sql = "SELECT * FROM usuarios WHERE nome = ? AND senha = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $nome, $senha); // "ss" indica que ambos os parâmetros são strings
$stmt->execute();
$result = $stmt->get_result();

// Verifica se o usuário foi encontrado
if($result->num_rows > 0) {
    session_start();
    $_SESSION["email"] = $email; // Armazena o email na sessão
    header("Location: index.html"); // Redireciona para o index.html
} else {
    echo "Nome ou senha inválido!";
}

?>