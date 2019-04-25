<?php


class Review
{
// DB stuff
    private $conn;
    private $table = 'reviews';

    // Properties
    public $id;
    public $name;
    public $evaluation;
    public $body;
    public $image;
    public $created_at;
    public $start;
    public $rpp;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function setRpp($rpp) {
        $this->rpp = $rpp;
    }

    public function setStart($start) {
        $this->start = $start;
    }

    # Get Reviews With Limit
    public function read()
    {
        // Create query
        $query = "SELECT * FROM $this->table ORDER BY created_at DESC LIMIT ?, ?";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Execute query
        $stmt->execute([$this->start, $this->rpp]);

        // (dumping out the statement)
        return $stmt;
    }

    #Create Review
    public function create()
    {
        $query = 'INSERT INTO ' . $this->table . '
            SET
                name = :name,
                evaluation = :evaluation,
                body = :body,
                image = :image';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->body = htmlspecialchars(strip_tags($this->body));

        // Bind data
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':evaluation', $this->evaluation);
        $stmt->bindParam(':body', $this->body);
        $stmt->bindParam(':image', $this->image);

        // Execute query
        $stmt->execute();
    }

    # Get Number of Rows
    public function nor()
    {
        // Create query
        $query = "SELECT COUNT(*) AS 'nor' FROM $this->table";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Execute query
        $stmt->execute();

        // (dumping out the statement)
        return $stmt;
    }

    # Get number of "a"
    public function noa()
    {
        // Create query
        $query = "SELECT COUNT(*) AS 'noa' FROM $this->table WHERE evaluation='a'";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Execute query
        $stmt->execute();

        // (dumping out the statement)
        return $stmt;
    }

    # Get number of "b"
    public function nob()
    {
        // Create query
        $query = "SELECT COUNT(*) AS 'nob' FROM $this->table WHERE evaluation='b'";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Execute query
        $stmt->execute();

        // (dumping out the statement)
        return $stmt;
    }

    # Get number of "c"
    public function noc()
    {
        // Create query
        $query = "SELECT COUNT(*) AS 'noc' FROM $this->table WHERE evaluation='c'";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Execute query
        $stmt->execute();

        // (dumping out the statement)
        return $stmt;
    }

    # Get number of "d"
    public function nod()
    {
        // Create query
        $query = "SELECT COUNT(*) AS 'nod' FROM $this->table WHERE evaluation='d'";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Connect End
        $this->conn = null;

        // Execute query
        $stmt->execute();

        // (dumping out the statement)
        return $stmt;
    }
}