<?php 

class Contact_model extends CI_Model {
    public function __construct()
    {
        parent::__construct();
    }

    public function sendMessage(array $payload) {
        $query = "INSERT INTO TBL_MESSAGE(name, email, subject, message) VALUES(?,?,?,?)";
        $result = $this->db->query($query, [$payload["name"], $payload["email"], $payload["subject"], $payload["message"]]);
        return $result;
    }
}