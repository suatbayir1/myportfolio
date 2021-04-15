<?php 

class Category_model extends CI_Model {
    public function __construct()
    {
        parent::__construct();
    }

    public function getCategories() {
        $sql = "SELECT c.id, c.category_name, c.created_at,
                 (SELECT COUNT(*) FROM TBL_POST p WHERE p.post_name is not null 
                 and p.category_id = c.id) as post_count FROM TBL_CATEGORY c";
        $result = $this->db->query($sql)->result();
        return $result;
    }

}