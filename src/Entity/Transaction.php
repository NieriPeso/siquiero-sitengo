<?php

namespace App\Entity;

use App\Repository\TransactionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TransactionRepository::class)
 */
class Transaction
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="transactions")
     */
    private $product;

    /**
     * @ORM\ManyToOne(targetEntity=Offer::class, inversedBy="transactions")
     */
    private $offer;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="transactions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $seller;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     */
    private $buyer;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $seller_hash;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $buyer_hash;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getOffer(): ?Offer
    {
        return $this->offer;
    }

    public function setOffer(?Offer $offer): self
    {
        $this->offer = $offer;

        return $this;
    }

    public function getSeller(): ?User
    {
        return $this->seller;
    }

    public function setSeller(?User $seller): self
    {
        $this->seller = $seller;

        return $this;
    }

    public function getBuyer(): ?User
    {
        return $this->buyer;
    }

    public function setBuyer(?User $buyer): self
    {
        $this->buyer = $buyer;

        return $this;
    }

    public function getSellerHash(): ?string
    {
        return $this->seller_hash;
    }

    public function setSellerHash(string $seller_hash): self
    {
        $this->seller_hash = $seller_hash;

        return $this;
    }

    public function getBuyerHash(): ?string
    {
        return $this->buyer_hash;
    }

    public function setBuyerHash(string $buyer_hash): self
    {
        $this->buyer_hash = $buyer_hash;

        return $this;
    }
}
