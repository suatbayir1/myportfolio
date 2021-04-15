import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from "draftjs-to-html";
import renderHTML from "react-render-html";
import "../../App.css";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { withStyles } from '@material-ui/styles';
import InputLabel from "@material-ui/core/InputLabel";
import avatar from "assets/img/faces/marc.jpg";
import BlogService from "../../services/BlogService";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};


class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            categoryList: [],
            selectedCategory: 0,
            author: "",
            postName: "",
            abstract: "",
            authors: [],
        };
    }

    async componentDidMount() {
        await this.getCategories();
        await this.getAuthors();
    }

    getCategories = async () => {
        const result = await BlogService.getCategories();
        if (result.message.code === 200) {
            this.setState({
                categoryList: result.data,
                selectedCategory: result.data[0].id
            })
        }
    }

    getAuthors = async () => {
        const result = await BlogService.getAllAuthors();
        if (result.message.code === 200) {
            this.setState({
                authors: result.data,
                author: result.data[0].id
            })
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    handleAddArticle = async () => {
        if (this.state.selectedCategory === "" || this.state.author === "" || this.state.postName === "" || this.state.abstract === "" || this.state.editorState === "") {
            NotificationManager.warning("Lütfen formu eksiksiz doldurun", 'Uyarı', 3000);
            return;
        }

        const payload = {
            "categoryID": Number(this.state.selectedCategory),
            "author": Number(this.state.author),
            "post_name": this.state.postName,
            "abstract": this.state.abstract,
            "content": draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        };

        const result = await BlogService.addPost(payload);
        if (result.message.code === 200) {
            NotificationManager.success('Yeni post başarıyla eklendi', 'Başarılı', 3000);
        } else {
            NotificationManager.error(result.message.text, 'Hata', 3000);
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Makale Oluştur</h4>
                                <p className={classes.cardCategoryWhite}>Yeni bir post eklemek için aşağıdaki formu doldurunuz</p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormControl
                                            style={{ width: '100%', marginTop: '27px' }}
                                            className={classes.formControl}
                                        >
                                            <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                                            <Select
                                                name="selectedCategory"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={this.state.selectedCategory}
                                                onChange={this.handleChangeInput}
                                            >
                                                {
                                                    this.state.categoryList.map(category => (
                                                        <MenuItem key={category["id"]} value={category["id"]}>{category["category_name"]}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormControl
                                            style={{ width: '100%', marginTop: '27px' }}
                                            className={classes.formControl}
                                        >
                                            <InputLabel id="demo-simple-select-label">Yazar</InputLabel>
                                            <Select
                                                name="author"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={this.state.author}
                                                onChange={this.handleChangeInput}
                                            >
                                                {
                                                    this.state.authors.map(author => (
                                                        <MenuItem key={author["id"]} value={author["id"]}>{author["name"]}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    {/* <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Yazar"
                                            id="email-address"
                                            formControlProps={{
                                                fullWidth: true,
                                                value: this.state.author,
                                                onChange: (e) => this.setState({ author: e.target.value }),
                                            }}
                                        />
                                    </GridItem> */}
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Makale Başlık"
                                            id="first-name"
                                            formControlProps={{
                                                fullWidth: true,
                                                value: this.state.postName,
                                                onChange: (e) => this.setState({ postName: e.target.value }),
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Özet"
                                            id="last-name"
                                            formControlProps={{
                                                fullWidth: true,
                                                value: this.state.abstract,
                                                onChange: (e) => this.setState({ abstract: e.target.value }),
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div className="textEditor">
                                            <Editor
                                                editorState={this.state.editorState}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onEditorStateChange={this.onEditorStateChange}
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" onClick={this.handleAddArticle}>Makale Ekle</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>

                <NotificationContainer />

                <div>
                    {renderHTML(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))}
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(BlogPage);
