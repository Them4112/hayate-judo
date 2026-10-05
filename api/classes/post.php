<?php
class Post
{
    public $id;
    public $caption;
    public $permaLink;
    public $mediaUrl;

    public $username;
    public $mediaType;
    public $timestamp;
    public function __construct($id, $caption, $permaLink, $mediaURL, $username, $mediaType, $timestamp)
    {
        $this->id = $id;
        $this->caption = $caption;
        $this->permaLink = $permaLink;
        $this->mediaUrl = $mediaURL;
        $this->username = $username;
        $this->mediaType = $mediaType;
        $this->timestamp = $timestamp;
    }
}
?>