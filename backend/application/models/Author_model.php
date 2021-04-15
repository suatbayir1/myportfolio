<?php 

class Author_model extends CI_Model {
    public function __construct()
    {
        parent::__construct();
    }

    public function getAll() {
        $sql = "SELECT * FROM TBL_AUTHOR";
        $result = $this->db->query($sql)->result();
        return $result;
    }

    public function get($payload) {
        $sql = "SELECT * FROM TBL_AUTHOR WHERE id = ?";
        $result = $this->db->query($sql, [$payload["authorID"]])->result();
        return $result;
    }

}