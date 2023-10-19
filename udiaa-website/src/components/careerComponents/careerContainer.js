import React, { useState, useEffect } from "react";
import './careerContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSearch } from "react-icons/ai";

const CareerContainer = () => {
    const careerPosts = [
        {
            id: 1,
            name: "Career Post 1",
            date: "October 19, 2023",
            category: "Career Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.",
        },
        {
            id: 2,
            name: "Interview 2",
            date: "October 23, 2023",
            category: "Interview Post",
            description: "This is the description for Career Post 1. It contains more details that you can read here.",
        },
        // Add more posts here, including Interview Posts
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
        <Container className='pt-3 pb-3'>
            <Row>
                <Col lg={true}>
                    <div className='left-side-career pb-2'>
                        {currentPosts.map(post => (
                            <div key={post.id}>
                                <img src={post.image} alt="Post" />
                                <h4>{post.name}</h4>
                                {isExpanded(post.id) ? (
                                    <>
                                        <p>{post.description}</p>
                                        <button onClick={() => toggleExpansion(post.id)}>Read Less</button>
                                    </>
                                ) : (
                                    <>
                                        <p>{post.description.substring(0, 100)}...</p>
                                        <button onClick={() => toggleExpansion(post.id)}>Read More</button>
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
                <Col lg={true}>
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
                                        className={selectedCategory === category ? "active" : ""}
                                    >
                                        {category}
                                    </button>
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
