<?php 

class Post_model extends CI_Model {
    public function __construct()
    {
        parent::__construct();
    }

    public function add($payload) {
        if(!$this->isPostAlreadyExists($payload["post_name"])) {
            $sql = "INSERT INTO TBL_POST(category_id, post_name, abstract, author, content) VALUES(?,?,?,?,?)";
            $result = $this->db->query($sql, [$payload["categoryID"], $payload["post_name"], $payload["abstract"], $payload["author"], $payload["content"]]);
            return $result;
        }
        return false;
    }

    public function isPostAlreadyExists($postName) {
        $this->db->where('post_name', $postName);
        $query = $this->db->get('TBL_POST');
        if ($query->num_rows() > 0) {
            return true;
        }
        return false;
    }

    public function get($payload) {
        $sql = "SELECT post.id, post.category_id, post.post_name, post.abstract, post.author, post.content, post.created_at,
                (SELECT author.name FROM TBL_AUTHOR author WHERE author.id = post.author) as author_name
                FROM TBL_POST post 
                WHERE post.author is not null 
                ORDER BY created_at DESC 
                LIMIT ? OFFSET ?";
        $queryResult = $this->db->query($sql, [intval($payload["limit"]), intval($payload["skip"])])->result();
        return $queryResult;
    }

    public function getPost($payload) {
        $sql = "SELECT * FROM TBL_POST WHERE id = ?";
        $queryResult = $this->db->query($sql, [$payload["postID"]])->result();
        return $queryResult;
    }

}