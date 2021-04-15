<?php

class Post extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Post_model");
        getHeader();
    }

    public function add() {
        $request = getRequest();
        $result = $this->Post_model->add($request);
        if ($result) {
            return returnResponse(true, ["Post added successfully"], [], [], 200);
        }
        return returnResponse(true, ["Post name already exists"], [], [], 409);
    }

    public function get() {
        $request = getRequest();
        $result = $this->Post_model->get($request);

        return returnResponse(true, ["Fetched posts successfully"], $result, [], 200);
    }

    public function getPost() {
        $request = getRequest();
        $post = $this->Post_model->getPost($request);
        return returnResponse(true, ["Fetched post successfully"], $post, [], 200);
    }

}