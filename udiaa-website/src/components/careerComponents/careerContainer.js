import React, { useState, useEffect } from "react";
import './careerContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSearch } from "react-icons/ai";
import career1 from "../images/career1.jpeg";
import career2 from "../images/career2.avif";
import career3 from "../images/career3.jpg";
import career4 from "../images/career4.webp";
import author from "../images/author.png";
import date from "../images/calendar.png";
import contacts from "../images/contacts.png";

const CareerContainer = () => {
    const careerPosts = [
        {
            id: 1,
            name: "Career Post 1",
            image: career1,
            author: "author",
            contacts: "0734981200",
            date: "October 19, 2023",
            category: "Career Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 2,
            name: "Interview 2",
            image: career2,
            author: "author",
            contacts: "0734981200",
            date: "October 23, 2023",
            category: "Interview Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 3,
            name: "Career Post 3",
            image: career1,
            author: "author",
            contacts: "0734981200",
            date: "October 19, 2023",
            category: "Career Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 4,
            name: "Interview 4",
            image: career2,
            author: "author",
            contacts: "0734981200",
            date: "October 23, 2023",
            category: "Interview Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        // Add more posts here, including Interview Posts
    ];
    const previousPosts = [
        {
            id: 3,
            name: "Previous title 3",
            image: career3,
            author: "author",
            contacts: "0734981200",
            date: "October 27, 2023",
            category: "Career Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is an older Career Post. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 4,
            name: "Previous title 4",
            image: career4,
            author: "author",
            contacts: "0734981200",
            date: "October 30, 2023",
            category: "Interview Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is an older Interview Post. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 5,
            name: "Previous title 5",
            image: career4,
            author: "author",
            contacts: "0734981200",
            date: "October 27, 2023",
            category: "Career Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is an older Career Post. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 6,
            name: "Previous title 6",
            image: career4,
            author: "author",
            contacts: "0734981200",
            date: "October 30, 2023",
            category: "Interview Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.This is an older Interview Post. It contains more details that you can read here.This is the description for Career Post 1. It contains more details that you can read here.",
        },
        // Add more older posts here
    ];

    const [filteredPosts, setFilteredPosts] = useState(careerPosts);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDate, setSelectedDate] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    useEffect(() => {
        // Apply filters to the posts
        let filtered = careerPosts.filter(post => {
            const lowerCategory = post.category.toLowerCase();
            const lowerDescription = post.description.toLowerCase();
            const lowerSearchKeyword = searchKeyword.toLowerCase();

            return lowerCategory.includes(lowerSearchKeyword) || lowerDescription.includes(lowerSearchKeyword);
        });

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        if (selectedDate !== 'All') {
            filtered = filtered.filter(post => post.date === selectedDate);
        }

        setFilteredPosts(filtered);
        setCurrentPage(1);
    }, [searchKeyword, selectedCategory, selectedDate]);

    const performSearch = () => {
        let filtered = careerPosts.filter(post => {
            const lowerCategory = post.category.toLowerCase();
            const lowerDescription = post.description.toLowerCase();
            const lowerTitle = post.name.toLowerCase();
            const lowerAuthor = post.author.toLowerCase();
            const lowerSearchKeyword = searchKeyword.toLowerCase();

            return lowerCategory.includes(lowerSearchKeyword) || lowerTitle.includes(lowerSearchKeyword) || lowerAuthor.includes(lowerSearchKeyword) ||lowerDescription.includes(lowerSearchKeyword);
        });

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        if (selectedDate !== 'All') {
            filtered = filtered.filter(post => post.date === selectedDate);
        }

        setFilteredPosts(filtered);
        setCurrentPage(1);
    };

    const [expandedPosts, setExpandedPosts] = useState([]);
    
    // Toggle the expansion state of a post
    const toggleExpansion = (postId) => {
        if (expandedPosts.includes(postId)) {
            setExpandedPosts(expandedPosts.filter(id => id !== postId));
        } else {
            setExpandedPosts([...expandedPosts, postId]);
        }
    };

    const isExpanded = (postId) => expandedPosts.includes(postId);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const categoryOptions = [
        "All Categories",
        "Career Post",
        "Interview Post",
    ];

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory('All');
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <Container fluid className='pt-3 pb-3'>
            <Row>
                <Col lg={8} md={12}>
                    <div className='left-side-career pb-2'>
                        {currentPosts.map(post => (
                            <div key={post.id} className="left-side-posts">
                                <img src={post.image} alt="Post" />
                                <h4>{post.name}</h4>
                                <div className="left-side-post-info">
                                    <p><img src={author} alt="authors-name"/>{post.author}</p>
                                    <p><img src={contacts} alt="contacts"/>{post.contacts}</p>
                                    <p><img src={date} alt="time"/>{post.date}</p>
                                </div>
                                {isExpanded(post.id) ? (
                                    <>
                                        <p>{post.description}</p>
                                        <button onClick={() => toggleExpansion(post.id)}>READ LESS</button>
                                    </>
                                ) : (
                                    <>
                                        <p>{post.description.substring(0, 100)}...</p>
                                        <button onClick={() => toggleExpansion(post.id)}>READ MORE</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            {"<"}
                        </button>
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={currentPage === number ? "active" : ""}
                            >
                                {number}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={indexOfLastPost >= filteredPosts.length}
                        >
                            {">"}
                        </button>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className='right-side-career pb-2'>
                        <div className="top">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                                <button onClick={performSearch}>
                                    <AiOutlineSearch />
                                </button>
                            </div>
                            <div className="category-buttons">
                                {categoryOptions.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryClick(category)}
                                        className={selectedCategory === category ? "active green-background" : ""}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        
                            <div className="previous-posts">
                                <h3>Previous Posts</h3>
                                {previousPosts.map(post => (
                                <div key={post.id} className="previous-posts-container">
                                    <div>
                                        <img src={post.image} alt="Post"/>   
                                    </div>
                                    <div>
                                        <h4>{post.name}</h4>
                                        <p>{post.date}</p>
                                    </div>  
                                </div>
                                 ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CareerContainer;
