/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare module "yortus-typescript" {
    interface Map<T> {
        [index: string]: T;
    }
    interface FileMap<T> {
        get(fileName: string): T;
        set(fileName: string, value: T): void;
        contains(fileName: string): boolean;
        remove(fileName: string): void;
        forEachValue(f: (v: T) => void): void;
        clear(): void;
    }
    interface TextRange {
        pos: number;
        end: number;
    }
    const enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        PreprocessorTrivia = 6,
        ShebangTrivia = 7,
        ConflictMarkerTrivia = 8,
        IfPreprocessorDirective = 9,
        EndIfPreprocessorDirective = 10,
        NumericLiteral = 11,
        StringLiteral = 12,
        RegularExpressionLiteral = 13,
        NoSubstitutionTemplateLiteral = 14,
        TemplateHead = 15,
        TemplateMiddle = 16,
        TemplateTail = 17,
        OpenBraceToken = 18,
        CloseBraceToken = 19,
        OpenParenToken = 20,
        CloseParenToken = 21,
        OpenBracketToken = 22,
        CloseBracketToken = 23,
        DotToken = 24,
        DotDotDotToken = 25,
        SemicolonToken = 26,
        CommaToken = 27,
        LessThanToken = 28,
        LessThanSlashToken = 29,
        GreaterThanToken = 30,
        LessThanEqualsToken = 31,
        GreaterThanEqualsToken = 32,
        EqualsEqualsToken = 33,
        ExclamationEqualsToken = 34,
        EqualsEqualsEqualsToken = 35,
        ExclamationEqualsEqualsToken = 36,
        EqualsGreaterThanToken = 37,
        PlusToken = 38,
        MinusToken = 39,
        AsteriskToken = 40,
        SlashToken = 41,
        PercentToken = 42,
        PlusPlusToken = 43,
        MinusMinusToken = 44,
        LessThanLessThanToken = 45,
        GreaterThanGreaterThanToken = 46,
        GreaterThanGreaterThanGreaterThanToken = 47,
        AmpersandToken = 48,
        BarToken = 49,
        CaretToken = 50,
        ExclamationToken = 51,
        TildeToken = 52,
        AmpersandAmpersandToken = 53,
        BarBarToken = 54,
        QuestionToken = 55,
        ColonToken = 56,
        AtToken = 57,
        EqualsToken = 58,
        PlusEqualsToken = 59,
        MinusEqualsToken = 60,
        AsteriskEqualsToken = 61,
        SlashEqualsToken = 62,
        PercentEqualsToken = 63,
        LessThanLessThanEqualsToken = 64,
        GreaterThanGreaterThanEqualsToken = 65,
        GreaterThanGreaterThanGreaterThanEqualsToken = 66,
        AmpersandEqualsToken = 67,
        BarEqualsToken = 68,
        CaretEqualsToken = 69,
        Identifier = 70,
        BreakKeyword = 71,
        CaseKeyword = 72,
        CatchKeyword = 73,
        ClassKeyword = 74,
        ConstKeyword = 75,
        ContinueKeyword = 76,
        DebuggerKeyword = 77,
        DefaultKeyword = 78,
        DeleteKeyword = 79,
        DoKeyword = 80,
        ElseKeyword = 81,
        EnumKeyword = 82,
        ExportKeyword = 83,
        ExtendsKeyword = 84,
        FalseKeyword = 85,
        FinallyKeyword = 86,
        ForKeyword = 87,
        FunctionKeyword = 88,
        IfKeyword = 89,
        ImportKeyword = 90,
        InKeyword = 91,
        InstanceOfKeyword = 92,
        NewKeyword = 93,
        NullKeyword = 94,
        ReturnKeyword = 95,
        SuperKeyword = 96,
        SwitchKeyword = 97,
        ThisKeyword = 98,
        ThrowKeyword = 99,
        TrueKeyword = 100,
        TryKeyword = 101,
        TypeOfKeyword = 102,
        VarKeyword = 103,
        VoidKeyword = 104,
        WhileKeyword = 105,
        WithKeyword = 106,
        ImplementsKeyword = 107,
        InterfaceKeyword = 108,
        LetKeyword = 109,
        PackageKeyword = 110,
        PrivateKeyword = 111,
        ProtectedKeyword = 112,
        PublicKeyword = 113,
        StaticKeyword = 114,
        YieldKeyword = 115,
        AbstractKeyword = 116,
        AsKeyword = 117,
        AnyKeyword = 118,
        AsyncKeyword = 119,
        AwaitKeyword = 120,
        BooleanKeyword = 121,
        ConstructorKeyword = 122,
        DeclareKeyword = 123,
        GetKeyword = 124,
        IsKeyword = 125,
        ModuleKeyword = 126,
        NamespaceKeyword = 127,
        RequireKeyword = 128,
        NumberKeyword = 129,
        SetKeyword = 130,
        StringKeyword = 131,
        SymbolKeyword = 132,
        TypeKeyword = 133,
        FromKeyword = 134,
        OfKeyword = 135,
        QualifiedName = 136,
        ComputedPropertyName = 137,
        TypeParameter = 138,
        Parameter = 139,
        Decorator = 140,
        PropertySignature = 141,
        PropertyDeclaration = 142,
        MethodSignature = 143,
        MethodDeclaration = 144,
        Constructor = 145,
        GetAccessor = 146,
        SetAccessor = 147,
        CallSignature = 148,
        ConstructSignature = 149,
        IndexSignature = 150,
        TypePredicate = 151,
        TypeReference = 152,
        FunctionType = 153,
        ConstructorType = 154,
        TypeQuery = 155,
        TypeLiteral = 156,
        ArrayType = 157,
        TupleType = 158,
        UnionType = 159,
        IntersectionType = 160,
        ParenthesizedType = 161,
        ObjectBindingPattern = 162,
        ArrayBindingPattern = 163,
        BindingElement = 164,
        ArrayLiteralExpression = 165,
        ObjectLiteralExpression = 166,
        PropertyAccessExpression = 167,
        ElementAccessExpression = 168,
        CallExpression = 169,
        NewExpression = 170,
        TaggedTemplateExpression = 171,
        TypeAssertionExpression = 172,
        ParenthesizedExpression = 173,
        FunctionExpression = 174,
        ArrowFunction = 175,
        DeleteExpression = 176,
        TypeOfExpression = 177,
        VoidExpression = 178,
        AwaitExpression = 179,
        PrefixUnaryExpression = 180,
        PostfixUnaryExpression = 181,
        BinaryExpression = 182,
        ConditionalExpression = 183,
        TemplateExpression = 184,
        YieldExpression = 185,
        SpreadElementExpression = 186,
        ClassExpression = 187,
        OmittedExpression = 188,
        ExpressionWithTypeArguments = 189,
        AsExpression = 190,
        TemplateSpan = 191,
        SemicolonClassElement = 192,
        Block = 193,
        VariableStatement = 194,
        EmptyStatement = 195,
        ExpressionStatement = 196,
        IfStatement = 197,
        DoStatement = 198,
        WhileStatement = 199,
        ForStatement = 200,
        ForInStatement = 201,
        ForOfStatement = 202,
        ContinueStatement = 203,
        BreakStatement = 204,
        ReturnStatement = 205,
        WithStatement = 206,
        SwitchStatement = 207,
        LabeledStatement = 208,
        ThrowStatement = 209,
        TryStatement = 210,
        DebuggerStatement = 211,
        VariableDeclaration = 212,
        VariableDeclarationList = 213,
        FunctionDeclaration = 214,
        ClassDeclaration = 215,
        InterfaceDeclaration = 216,
        TypeAliasDeclaration = 217,
        EnumDeclaration = 218,
        ModuleDeclaration = 219,
        ModuleBlock = 220,
        CaseBlock = 221,
        ImportEqualsDeclaration = 222,
        ImportDeclaration = 223,
        ImportClause = 224,
        NamespaceImport = 225,
        NamedImports = 226,
        ImportSpecifier = 227,
        ExportAssignment = 228,
        ExportDeclaration = 229,
        NamedExports = 230,
        ExportSpecifier = 231,
        MissingDeclaration = 232,
        ExternalModuleReference = 233,
        JsxElement = 234,
        JsxSelfClosingElement = 235,
        JsxOpeningElement = 236,
        JsxText = 237,
        JsxClosingElement = 238,
        JsxAttribute = 239,
        JsxSpreadAttribute = 240,
        JsxExpression = 241,
        CaseClause = 242,
        DefaultClause = 243,
        HeritageClause = 244,
        CatchClause = 245,
        PropertyAssignment = 246,
        ShorthandPropertyAssignment = 247,
        EnumMember = 248,
        SourceFile = 249,
        JSDocTypeExpression = 250,
        JSDocAllType = 251,
        JSDocUnknownType = 252,
        JSDocArrayType = 253,
        JSDocUnionType = 254,
        JSDocTupleType = 255,
        JSDocNullableType = 256,
        JSDocNonNullableType = 257,
        JSDocRecordType = 258,
        JSDocRecordMember = 259,
        JSDocTypeReference = 260,
        JSDocOptionalType = 261,
        JSDocFunctionType = 262,
        JSDocVariadicType = 263,
        JSDocConstructorType = 264,
        JSDocThisType = 265,
        JSDocComment = 266,
        JSDocTag = 267,
        JSDocParameterTag = 268,
        JSDocReturnTag = 269,
        JSDocTypeTag = 270,
        JSDocTemplateTag = 271,
        SyntaxList = 272,
        Count = 273,
        FirstAssignment = 58,
        LastAssignment = 69,
        FirstReservedWord = 71,
        LastReservedWord = 106,
        FirstKeyword = 71,
        LastKeyword = 135,
        FirstFutureReservedWord = 107,
        LastFutureReservedWord = 115,
        FirstTypeNode = 152,
        LastTypeNode = 161,
        FirstPunctuation = 18,
        LastPunctuation = 69,
        FirstToken = 0,
        LastToken = 135,
        FirstTriviaToken = 2,
        LastTriviaToken = 8,
        FirstLiteralToken = 11,
        LastLiteralToken = 14,
        FirstTemplateToken = 14,
        LastTemplateToken = 17,
        FirstBinaryOperator = 28,
        LastBinaryOperator = 69,
        FirstNode = 136,
    }
    const enum NodeFlags {
        Export = 1,
        Ambient = 2,
        Public = 16,
        Private = 32,
        Protected = 64,
        Static = 128,
        Abstract = 256,
        Async = 512,
        Default = 1024,
        MultiLine = 2048,
        Synthetic = 4096,
        DeclarationFile = 8192,
        Let = 16384,
        Const = 32768,
        OctalLiteral = 65536,
        Namespace = 131072,
        ExportContext = 262144,
        Modifier = 2035,
        AccessibilityModifier = 112,
        BlockScoped = 49152,
    }
    const enum JsxFlags {
        None = 0,
        IntrinsicNamedElement = 1,
        IntrinsicIndexedElement = 2,
        ClassElement = 4,
        UnknownElement = 8,
        IntrinsicElement = 3,
    }
    interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        decorators?: NodeArray<Decorator>;
        modifiers?: ModifiersArray;
        parent?: Node;
    }
    interface NodeArray<T> extends Array<T>, TextRange {
        hasTrailingComma?: boolean;
    }
    interface ModifiersArray extends NodeArray<Node> {
        flags: number;
    }
    interface Identifier extends PrimaryExpression {
        text: string;
        originalKeywordKind?: SyntaxKind;
    }
    interface QualifiedName extends Node {
        left: EntityName;
        right: Identifier;
    }
    type EntityName = Identifier | QualifiedName;
    type DeclarationName = Identifier | LiteralExpression | ComputedPropertyName | BindingPattern;
    interface Declaration extends Node {
        _declarationBrand: any;
        name?: DeclarationName;
    }
    interface ComputedPropertyName extends Node {
        expression: Expression;
    }
    interface Decorator extends Node {
        expression: LeftHandSideExpression;
    }
    interface TypeParameterDeclaration extends Declaration {
        name: Identifier;
        constraint?: TypeNode;
        expression?: Expression;
    }
    interface SignatureDeclaration extends Declaration {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
    }
    interface VariableDeclaration extends Declaration {
        parent?: VariableDeclarationList;
        name: Identifier | BindingPattern;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface VariableDeclarationList extends Node {
        declarations: NodeArray<VariableDeclaration>;
    }
    interface ParameterDeclaration extends Declaration {
        dotDotDotToken?: Node;
        name: Identifier | BindingPattern;
        questionToken?: Node;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface BindingElement extends Declaration {
        propertyName?: Identifier;
        dotDotDotToken?: Node;
        name: Identifier | BindingPattern;
        initializer?: Expression;
    }
    interface PropertyDeclaration extends Declaration, ClassElement {
        name: DeclarationName;
        questionToken?: Node;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface ObjectLiteralElement extends Declaration {
        _objectLiteralBrandBrand: any;
    }
    interface PropertyAssignment extends ObjectLiteralElement {
        _propertyAssignmentBrand: any;
        name: DeclarationName;
        questionToken?: Node;
        initializer: Expression;
    }
    interface ShorthandPropertyAssignment extends ObjectLiteralElement {
        name: Identifier;
        questionToken?: Node;
    }
    interface VariableLikeDeclaration extends Declaration {
        propertyName?: Identifier;
        dotDotDotToken?: Node;
        name: DeclarationName;
        questionToken?: Node;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface BindingPattern extends Node {
        elements: NodeArray<BindingElement>;
    }
    /**
     * Several node kinds share function-like features such as a signature,
     * a name, and a body. These nodes should extend FunctionLikeDeclaration.
     * Examples:
     * - FunctionDeclaration
     * - MethodDeclaration
     * - AccessorDeclaration
     */
    interface FunctionLikeDeclaration extends SignatureDeclaration {
        _functionLikeDeclarationBrand: any;
        asteriskToken?: Node;
        questionToken?: Node;
        body?: Block | Expression;
    }
    interface FunctionDeclaration extends FunctionLikeDeclaration, Statement {
        name?: Identifier;
        body?: Block;
    }
    interface MethodDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        body?: Block;
    }
    interface ConstructorDeclaration extends FunctionLikeDeclaration, ClassElement {
        body?: Block;
    }
    interface SemicolonClassElement extends ClassElement {
        _semicolonClassElementBrand: any;
    }
    interface AccessorDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        _accessorDeclarationBrand: any;
        body: Block;
    }
    interface IndexSignatureDeclaration extends SignatureDeclaration, ClassElement {
        _indexSignatureDeclarationBrand: any;
    }
    interface TypeNode extends Node {
        _typeNodeBrand: any;
    }
    interface FunctionOrConstructorTypeNode extends TypeNode, SignatureDeclaration {
        _functionOrConstructorTypeNodeBrand: any;
    }
    interface TypeReferenceNode extends TypeNode {
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface TypePredicateNode extends TypeNode {
        parameterName: Identifier;
        type: TypeNode;
    }
    interface TypeQueryNode extends TypeNode {
        exprName: EntityName;
    }
    interface TypeLiteralNode extends TypeNode, Declaration {
        members: NodeArray<Node>;
    }
    interface ArrayTypeNode extends TypeNode {
        elementType: TypeNode;
    }
    interface TupleTypeNode extends TypeNode {
        elementTypes: NodeArray<TypeNode>;
    }
    interface UnionOrIntersectionTypeNode extends TypeNode {
        types: NodeArray<TypeNode>;
    }
    interface UnionTypeNode extends UnionOrIntersectionTypeNode {
    }
    interface IntersectionTypeNode extends UnionOrIntersectionTypeNode {
    }
    interface ParenthesizedTypeNode extends TypeNode {
        type: TypeNode;
    }
    interface StringLiteral extends LiteralExpression, TypeNode {
        _stringLiteralBrand: any;
    }
    interface Expression extends Node {
        _expressionBrand: any;
        contextualType?: Type;
    }
    interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }
    interface PrefixUnaryExpression extends UnaryExpression {
        operator: SyntaxKind;
        operand: UnaryExpression;
    }
    interface PostfixUnaryExpression extends PostfixExpression {
        operand: LeftHandSideExpression;
        operator: SyntaxKind;
    }
    interface PostfixExpression extends UnaryExpression {
        _postfixExpressionBrand: any;
    }
    interface LeftHandSideExpression extends PostfixExpression {
        _leftHandSideExpressionBrand: any;
    }
    interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }
    interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }
    interface DeleteExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface TypeOfExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface VoidExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface AwaitExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface YieldExpression extends Expression {
        asteriskToken?: Node;
        expression?: Expression;
    }
    interface BinaryExpression extends Expression {
        left: Expression;
        operatorToken: Node;
        right: Expression;
    }
    interface ConditionalExpression extends Expression {
        condition: Expression;
        questionToken: Node;
        whenTrue: Expression;
        colonToken: Node;
        whenFalse: Expression;
    }
    interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclaration {
        name?: Identifier;
        body: Block | Expression;
    }
    interface ArrowFunction extends Expression, FunctionLikeDeclaration {
        equalsGreaterThanToken: Node;
    }
    interface LiteralExpression extends PrimaryExpression {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
    }
    interface TemplateExpression extends PrimaryExpression {
        head: LiteralExpression;
        templateSpans: NodeArray<TemplateSpan>;
    }
    interface TemplateSpan extends Node {
        expression: Expression;
        literal: LiteralExpression;
    }
    interface ParenthesizedExpression extends PrimaryExpression {
        expression: Expression;
    }
    interface ArrayLiteralExpression extends PrimaryExpression {
        elements: NodeArray<Expression>;
    }
    interface SpreadElementExpression extends Expression {
        expression: Expression;
    }
    interface ObjectLiteralExpression extends PrimaryExpression, Declaration {
        properties: NodeArray<ObjectLiteralElement>;
    }
    interface PropertyAccessExpression extends MemberExpression {
        expression: LeftHandSideExpression;
        dotToken: Node;
        name: Identifier;
    }
    interface ElementAccessExpression extends MemberExpression {
        expression: LeftHandSideExpression;
        argumentExpression?: Expression;
    }
    interface CallExpression extends LeftHandSideExpression {
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    interface ExpressionWithTypeArguments extends TypeNode {
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface NewExpression extends CallExpression, PrimaryExpression {
    }
    interface TaggedTemplateExpression extends MemberExpression {
        tag: LeftHandSideExpression;
        template: LiteralExpression | TemplateExpression;
    }
    type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator;
    interface AsExpression extends Expression {
        expression: Expression;
        type: TypeNode;
    }
    interface TypeAssertion extends UnaryExpression {
        type: TypeNode;
        expression: UnaryExpression;
    }
    type AssertionExpression = TypeAssertion | AsExpression;
    interface JsxElement extends PrimaryExpression {
        openingElement: JsxOpeningElement;
        children: NodeArray<JsxChild>;
        closingElement: JsxClosingElement;
    }
    interface JsxOpeningElement extends Expression {
        _openingElementBrand?: any;
        tagName: EntityName;
        attributes: NodeArray<JsxAttribute | JsxSpreadAttribute>;
    }
    interface JsxSelfClosingElement extends PrimaryExpression, JsxOpeningElement {
        _selfClosingElementBrand?: any;
    }
    type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
    interface JsxAttribute extends Node {
        name: Identifier;
        initializer?: Expression;
    }
    interface JsxSpreadAttribute extends Node {
        expression: Expression;
    }
    interface JsxClosingElement extends Node {
        tagName: EntityName;
    }
    interface JsxExpression extends Expression {
        expression?: Expression;
    }
    interface JsxText extends Node {
        _jsxTextExpressionBrand: any;
    }
    type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement;
    interface Statement extends Node {
        _statementBrand: any;
    }
    interface Block extends Statement {
        statements: NodeArray<Statement>;
    }
    interface VariableStatement extends Statement {
        declarationList: VariableDeclarationList;
    }
    interface ExpressionStatement extends Statement {
        expression: Expression;
    }
    interface IfStatement extends Statement {
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }
    interface IterationStatement extends Statement {
        statement: Statement;
    }
    interface DoStatement extends IterationStatement {
        expression: Expression;
    }
    interface WhileStatement extends IterationStatement {
        expression: Expression;
    }
    interface ForStatement extends IterationStatement {
        initializer?: VariableDeclarationList | Expression;
        condition?: Expression;
        incrementor?: Expression;
    }
    interface ForInStatement extends IterationStatement {
        initializer: VariableDeclarationList | Expression;
        expression: Expression;
    }
    interface ForOfStatement extends IterationStatement {
        initializer: VariableDeclarationList | Expression;
        expression: Expression;
    }
    interface BreakOrContinueStatement extends Statement {
        label?: Identifier;
    }
    interface ReturnStatement extends Statement {
        expression?: Expression;
    }
    interface WithStatement extends Statement {
        expression: Expression;
        statement: Statement;
    }
    interface SwitchStatement extends Statement {
        expression: Expression;
        caseBlock: CaseBlock;
    }
    interface CaseBlock extends Node {
        clauses: NodeArray<CaseOrDefaultClause>;
    }
    interface CaseClause extends Node {
        expression?: Expression;
        statements: NodeArray<Statement>;
    }
    interface DefaultClause extends Node {
        statements: NodeArray<Statement>;
    }
    type CaseOrDefaultClause = CaseClause | DefaultClause;
    interface LabeledStatement extends Statement {
        label: Identifier;
        statement: Statement;
    }
    interface ThrowStatement extends Statement {
        expression: Expression;
    }
    interface TryStatement extends Statement {
        tryBlock: Block;
        catchClause?: CatchClause;
        finallyBlock?: Block;
    }
    interface CatchClause extends Node {
        variableDeclaration: VariableDeclaration;
        block: Block;
    }
    interface ClassLikeDeclaration extends Declaration {
        name?: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<ClassElement>;
    }
    interface ClassDeclaration extends ClassLikeDeclaration, Statement {
    }
    interface ClassExpression extends ClassLikeDeclaration, PrimaryExpression {
    }
    interface ClassElement extends Declaration {
        _classElementBrand: any;
    }
    interface InterfaceDeclaration extends Declaration, Statement {
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<Declaration>;
    }
    interface HeritageClause extends Node {
        token: SyntaxKind;
        types?: NodeArray<ExpressionWithTypeArguments>;
    }
    interface TypeAliasDeclaration extends Declaration, Statement {
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        type: TypeNode;
    }
    interface EnumMember extends Declaration {
        name: DeclarationName;
        initializer?: Expression;
    }
    interface EnumDeclaration extends Declaration, Statement {
        name: Identifier;
        members: NodeArray<EnumMember>;
    }
    interface ModuleDeclaration extends Declaration, Statement {
        name: Identifier | LiteralExpression;
        body: ModuleBlock | ModuleDeclaration;
    }
    interface ModuleBlock extends Node, Statement {
        statements: NodeArray<Statement>;
    }
    interface ImportEqualsDeclaration extends Declaration, Statement {
        name: Identifier;
        moduleReference: EntityName | ExternalModuleReference;
    }
    interface ExternalModuleReference extends Node {
        expression?: Expression;
    }
    interface ImportDeclaration extends Statement {
        importClause?: ImportClause;
        moduleSpecifier: Expression;
    }
    interface ImportClause extends Declaration {
        name?: Identifier;
        namedBindings?: NamespaceImport | NamedImports;
    }
    interface NamespaceImport extends Declaration {
        name: Identifier;
    }
    interface ExportDeclaration extends Declaration, Statement {
        exportClause?: NamedExports;
        moduleSpecifier?: Expression;
    }
    interface NamedImportsOrExports extends Node {
        elements: NodeArray<ImportOrExportSpecifier>;
    }
    type NamedImports = NamedImportsOrExports;
    type NamedExports = NamedImportsOrExports;
    interface ImportOrExportSpecifier extends Declaration {
        propertyName?: Identifier;
        name: Identifier;
    }
    type ImportSpecifier = ImportOrExportSpecifier;
    type ExportSpecifier = ImportOrExportSpecifier;
    interface ExportAssignment extends Declaration, Statement {
        isExportEquals?: boolean;
        expression: Expression;
    }
    interface FileReference extends TextRange {
        fileName: string;
    }
    interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: SyntaxKind;
    }
    interface JSDocTypeExpression extends Node {
        type: JSDocType;
    }
    interface JSDocType extends TypeNode {
        _jsDocTypeBrand: any;
    }
    interface JSDocAllType extends JSDocType {
        _JSDocAllTypeBrand: any;
    }
    interface JSDocUnknownType extends JSDocType {
        _JSDocUnknownTypeBrand: any;
    }
    interface JSDocArrayType extends JSDocType {
        elementType: JSDocType;
    }
    interface JSDocUnionType extends JSDocType {
        types: NodeArray<JSDocType>;
    }
    interface JSDocTupleType extends JSDocType {
        types: NodeArray<JSDocType>;
    }
    interface JSDocNonNullableType extends JSDocType {
        type: JSDocType;
    }
    interface JSDocNullableType extends JSDocType {
        type: JSDocType;
    }
    interface JSDocRecordType extends JSDocType, TypeLiteralNode {
        members: NodeArray<JSDocRecordMember>;
    }
    interface JSDocTypeReference extends JSDocType {
        name: EntityName;
        typeArguments: NodeArray<JSDocType>;
    }
    interface JSDocOptionalType extends JSDocType {
        type: JSDocType;
    }
    interface JSDocFunctionType extends JSDocType, SignatureDeclaration {
        parameters: NodeArray<ParameterDeclaration>;
        type: JSDocType;
    }
    interface JSDocVariadicType extends JSDocType {
        type: JSDocType;
    }
    interface JSDocConstructorType extends JSDocType {
        type: JSDocType;
    }
    interface JSDocThisType extends JSDocType {
        type: JSDocType;
    }
    interface JSDocRecordMember extends PropertyDeclaration {
        name: Identifier | LiteralExpression;
        type?: JSDocType;
    }
    interface JSDocComment extends Node {
        tags: NodeArray<JSDocTag>;
    }
    interface JSDocTag extends Node {
        atToken: Node;
        tagName: Identifier;
    }
    interface JSDocTemplateTag extends JSDocTag {
        typeParameters: NodeArray<TypeParameterDeclaration>;
    }
    interface JSDocReturnTag extends JSDocTag {
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypeTag extends JSDocTag {
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocParameterTag extends JSDocTag {
        preParameterName?: Identifier;
        typeExpression?: JSDocTypeExpression;
        postParameterName?: Identifier;
        isBracketed: boolean;
    }
    interface SourceFile extends Declaration {
        statements: NodeArray<Statement>;
        endOfFileToken: Node;
        fileName: string;
        text: string;
        amdDependencies: {
            path: string;
            name: string;
        }[];
        moduleName: string;
        referencedFiles: FileReference[];
        languageVariant: LanguageVariant;
        /**
         * lib.d.ts should have a reference comment like
         *
         *  /// <reference no-default-lib="true"/>
         *
         * If any other file has this comment, it signals not to include lib.d.ts
         * because this containing file is intended to act as a default library.
         */
        hasNoDefaultLib: boolean;
        languageVersion: ScriptTarget;
    }
    interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile;
        getCurrentDirectory(): string;
    }
    interface ParseConfigHost extends ModuleResolutionHost {
        readDirectory(rootDir: string, extension: string, exclude: string[]): string[];
    }
    interface WriteFileCallback {
        (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void): void;
    }
    class OperationCanceledException {
    }
    interface CancellationToken {
        isCancellationRequested(): boolean;
        /** @throws OperationCanceledException if isCancellationRequested is true */
        throwIfCancellationRequested(): void;
    }
    interface Program extends ScriptReferenceHost {
        /**
         * Get a list of root file names that were passed to a 'createProgram'
         */
        getRootFileNames(): string[];
        /**
         * Get a list of files in the program
         */
        getSourceFiles(): SourceFile[];
        /**
         * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
         * the JavaScript and declaration files will be produced for all the files in this program.
         * If targetSourceFile is specified, then only the JavaScript and declaration for that
         * specific file will be generated.
         *
         * If writeFile is not specified then the writeFile callback from the compiler host will be
         * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
         * will be invoked when writing the JavaScript and declaration files.
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken): EmitResult;
        getOptionsDiagnostics(cancellationToken?: CancellationToken): Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        /**
         * Gets a type checker that can be used to semantically analyze source fils in the program.
         */
        getTypeChecker(): TypeChecker;
    }
    interface SourceMapSpan {
        /** Line number in the .js file. */
        emittedLine: number;
        /** Column number in the .js file. */
        emittedColumn: number;
        /** Line number in the .ts file. */
        sourceLine: number;
        /** Column number in the .ts file. */
        sourceColumn: number;
        /** Optional name (index into names array) associated with this span. */
        nameIndex?: number;
        /** .ts file (index into sources array) associated with this span */
        sourceIndex: number;
    }
    interface SourceMapData {
        sourceMapFilePath: string;
        jsSourceMappingURL: string;
        sourceMapFile: string;
        sourceMapSourceRoot: string;
        sourceMapSources: string[];
        sourceMapSourcesContent?: string[];
        inputSourceFileNames: string[];
        sourceMapNames?: string[];
        sourceMapMappings: string;
        sourceMapDecodedMappings: SourceMapSpan[];
    }
    /** Return code used by getEmitOutput function to indicate status of the function */
    enum ExitStatus {
        Success = 0,
        DiagnosticsPresent_OutputsSkipped = 1,
        DiagnosticsPresent_OutputsGenerated = 2,
    }
    interface EmitResult {
        emitSkipped: boolean;
        diagnostics: Diagnostic[];
    }
    interface TypeChecker {
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol;
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type;
        getBaseTypes(type: InterfaceType): ObjectType[];
        getReturnTypeOfSignature(signature: Signature): Type;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolAtLocation(node: Node): Symbol;
        getShorthandAssignmentValueSymbol(location: Node): Symbol;
        getTypeAtLocation(node: Node): Type;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        getSymbolDisplayBuilder(): SymbolDisplayBuilder;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): Symbol[];
        getContextualType(node: Expression): Type;
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[]): Signature;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature;
        isImplementationOfOverload(node: FunctionLikeDeclaration): boolean;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): number;
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName, propertyName: string): boolean;
        getAliasedSymbol(symbol: Symbol): Symbol;
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
        getJsxElementAttributesType(elementNode: JsxOpeningLikeElement): Type;
        getJsxIntrinsicTagNames(): Symbol[];
        isOptionalParameter(node: ParameterDeclaration): boolean;
    }
    interface SymbolDisplayBuilder {
        buildTypeDisplay(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildSymbolDisplay(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        buildSignatureDisplay(signatures: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildParameterDisplay(parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplay(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplayFromSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaraiton?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForParametersAndDelimiters(parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForTypeParametersAndDelimiters(typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildReturnTypeDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
    }
    interface SymbolWriter {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
    }
    const enum TypeFormatFlags {
        None = 0,
        WriteArrayAsGenericType = 1,
        UseTypeOfFunction = 2,
        NoTruncation = 4,
        WriteArrowStyleSignature = 8,
        WriteOwnNameForAnyLike = 16,
        WriteTypeArgumentsOfSignature = 32,
        InElementType = 64,
        UseFullyQualifiedType = 128,
    }
    const enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
    }
    interface TypePredicate {
        parameterName: string;
        parameterIndex: number;
        type: Type;
    }
    const enum SymbolFlags {
        None = 0,
        FunctionScopedVariable = 1,
        BlockScopedVariable = 2,
        Property = 4,
        EnumMember = 8,
        Function = 16,
        Class = 32,
        Interface = 64,
        ConstEnum = 128,
        RegularEnum = 256,
        ValueModule = 512,
        NamespaceModule = 1024,
        TypeLiteral = 2048,
        ObjectLiteral = 4096,
        Method = 8192,
        Constructor = 16384,
        GetAccessor = 32768,
        SetAccessor = 65536,
        Signature = 131072,
        TypeParameter = 262144,
        TypeAlias = 524288,
        ExportValue = 1048576,
        ExportType = 2097152,
        ExportNamespace = 4194304,
        Alias = 8388608,
        Instantiated = 16777216,
        Merged = 33554432,
        Transient = 67108864,
        Prototype = 134217728,
        SyntheticProperty = 268435456,
        Optional = 536870912,
        ExportStar = 1073741824,
        Enum = 384,
        Variable = 3,
        Value = 107455,
        Type = 793056,
        Namespace = 1536,
        Module = 1536,
        Accessor = 98304,
        FunctionScopedVariableExcludes = 107454,
        BlockScopedVariableExcludes = 107455,
        ParameterExcludes = 107455,
        PropertyExcludes = 107455,
        EnumMemberExcludes = 107455,
        FunctionExcludes = 106927,
        ClassExcludes = 899519,
        InterfaceExcludes = 792960,
        RegularEnumExcludes = 899327,
        ConstEnumExcludes = 899967,
        ValueModuleExcludes = 106639,
        NamespaceModuleExcludes = 0,
        MethodExcludes = 99263,
        GetAccessorExcludes = 41919,
        SetAccessorExcludes = 74687,
        TypeParameterExcludes = 530912,
        TypeAliasExcludes = 793056,
        AliasExcludes = 8388608,
        ModuleMember = 8914931,
        ExportHasLocal = 944,
        HasExports = 1952,
        HasMembers = 6240,
        BlockScoped = 418,
        PropertyOrAccessor = 98308,
        Export = 7340032,
    }
    interface Symbol {
        flags: SymbolFlags;
        name: string;
        declarations?: Declaration[];
        valueDeclaration?: Declaration;
        members?: SymbolTable;
        exports?: SymbolTable;
    }
    interface SymbolTable {
        [index: string]: Symbol;
    }
    const enum TypeFlags {
        Any = 1,
        String = 2,
        Number = 4,
        Boolean = 8,
        Void = 16,
        Undefined = 32,
        Null = 64,
        Enum = 128,
        StringLiteral = 256,
        TypeParameter = 512,
        Class = 1024,
        Interface = 2048,
        Reference = 4096,
        Tuple = 8192,
        Union = 16384,
        Intersection = 32768,
        Anonymous = 65536,
        Instantiated = 131072,
        ObjectLiteral = 524288,
        ESSymbol = 16777216,
        StringLike = 258,
        NumberLike = 132,
        ObjectType = 80896,
        UnionOrIntersection = 49152,
        StructuredType = 130048,
    }
    interface Type {
        flags: TypeFlags;
        symbol?: Symbol;
    }
    interface StringLiteralType extends Type {
        text: string;
    }
    interface ObjectType extends Type {
    }
    interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];
        outerTypeParameters: TypeParameter[];
        localTypeParameters: TypeParameter[];
    }
    interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredStringIndexType: Type;
        declaredNumberIndexType: Type;
    }
    interface TypeReference extends ObjectType {
        target: GenericType;
        typeArguments: Type[];
    }
    interface GenericType extends InterfaceType, TypeReference {
    }
    interface TupleType extends ObjectType {
        elementTypes: Type[];
        baseArrayType: TypeReference;
    }
    interface UnionOrIntersectionType extends Type {
        types: Type[];
    }
    interface UnionType extends UnionOrIntersectionType {
    }
    interface IntersectionType extends UnionOrIntersectionType {
    }
    interface TypeParameter extends Type {
        constraint: Type;
    }
    const enum SignatureKind {
        Call = 0,
        Construct = 1,
    }
    interface Signature {
        declaration: SignatureDeclaration;
        typeParameters: TypeParameter[];
        parameters: Symbol[];
        typePredicate?: TypePredicate;
    }
    const enum IndexKind {
        String = 0,
        Number = 1,
    }
    interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
    }
    /**
     * A linked list of formatted diagnostic messages to be used as part of a multiline message.
     * It is built from the bottom up, leaving the head to be the "main" diagnostic.
     * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
     * the difference is that messages are all preformatted in DMC.
     */
    interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }
    interface Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
        messageText: string | DiagnosticMessageChain;
        category: DiagnosticCategory;
        code: number;
    }
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
    }
    const enum ModuleResolutionKind {
        Classic = 1,
        NodeJs = 2,
    }
    interface CompilerOptions {
        allowNonTsExtensions?: boolean;
        charset?: string;
        declaration?: boolean;
        diagnostics?: boolean;
        emitBOM?: boolean;
        help?: boolean;
        init?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        jsx?: JsxEmit;
        listFiles?: boolean;
        locale?: string;
        mapRoot?: string;
        module?: ModuleKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noImplicitAny?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outFile?: string;
        outDir?: string;
        preserveConstEnums?: boolean;
        project?: string;
        removeComments?: boolean;
        rootDir?: string;
        sourceMap?: boolean;
        sourceRoot?: string;
        suppressExcessPropertyErrors?: boolean;
        suppressImplicitAnyIndexErrors?: boolean;
        target?: ScriptTarget;
        targetHasIterables?: boolean;
        targetHasForOf?: boolean;
        targetHasGenerators?: boolean;
        targetHasPromises?: boolean;
        targetHasArrowFunctions?: boolean;
        targetHasBlockScoping?: boolean;
        targetHasSymbols?: boolean;
        targetHasModules?: boolean;
        version?: boolean;
        watch?: boolean;
        isolatedModules?: boolean;
        experimentalDecorators?: boolean;
        experimentalAsyncFunctions?: boolean;
        emitDecoratorMetadata?: boolean;
        moduleResolution?: ModuleResolutionKind;
        define?: string;
        [option: string]: string | number | boolean;
    }
    const enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
    }
    const enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
    }
    const enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1,
    }
    interface LineAndCharacter {
        line: number;
        character: number;
    }
    const enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES6 = 2,
        Latest = 2,
    }
    interface LanguageVersion {
        baseline: ScriptTarget;
        hasIterables: boolean;
        hasForOf: boolean;
        hasGenerators: boolean;
        hasPromises: boolean;
        hasArrowFunctions: boolean;
        hasBlockScoping: boolean;
        hasSymbols: boolean;
        hasModules: boolean;
        [key: string]: ScriptTarget | boolean;
    }
    const enum LanguageVariant {
        Standard = 0,
        JSX = 1,
    }
    interface ParsedCommandLine {
        options: CompilerOptions;
        fileNames: string[];
        errors: Diagnostic[];
    }
    interface ModuleResolutionHost {
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string;
    }
    interface ResolvedModule {
        resolvedFileName: string;
        failedLookupLocations: string[];
    }
    type ModuleNameResolver = (moduleName: string, containingFile: string, options: CompilerOptions, host: ModuleResolutionHost) => ResolvedModule;
    interface CompilerHost extends ModuleResolutionHost {
        getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getCancellationToken?(): CancellationToken;
        getDefaultLibFileName(options: CompilerOptions): string;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        resolveModuleNames?(moduleNames: string[], containingFile: string): string[];
    }
    interface TextSpan {
        start: number;
        length: number;
    }
    interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }
}
declare module "yortus-typescript" {
    interface System {
        args: string[];
        newLine: string;
        useCaseSensitiveFileNames: boolean;
        write(s: string): void;
        readFile(path: string, encoding?: string): string;
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void;
        watchFile?(path: string, callback: (path: string) => void): FileWatcher;
        resolvePath(path: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        createDirectory(path: string): void;
        getExecutingFilePath(): string;
        getCurrentDirectory(): string;
        readDirectory(path: string, extension?: string, exclude?: string[]): string[];
        getMemoryUsage?(): number;
        exit(exitCode?: number): void;
    }
    interface FileWatcher {
        close(): void;
    }
    var sys: System;
}
declare module "yortus-typescript" {
    interface ErrorCallback {
        (message: DiagnosticMessage, length: number): void;
    }
    interface Scanner {
        getStartPos(): number;
        getToken(): SyntaxKind;
        getTextPos(): number;
        getTokenPos(): number;
        getTokenText(): string;
        getTokenValue(): string;
        hasExtendedUnicodeEscape(): boolean;
        hasPrecedingLineBreak(): boolean;
        isIdentifier(): boolean;
        isReservedWord(): boolean;
        isUnterminated(): boolean;
        reScanGreaterToken(): SyntaxKind;
        reScanSlashToken(): SyntaxKind;
        reScanTemplateToken(): SyntaxKind;
        scanJsxIdentifier(): SyntaxKind;
        reScanJsxToken(): SyntaxKind;
        scanJsxToken(): SyntaxKind;
        scan(): SyntaxKind;
        setText(text: string, start?: number, length?: number): void;
        setOnError(onError: ErrorCallback): void;
        setScriptTarget(scriptTarget: ScriptTarget): void;
        setLanguageVariant(variant: LanguageVariant): void;
        setTextPos(textPos: number): void;
        lookAhead<T>(callback: () => T): T;
        tryScan<T>(callback: () => T): T;
    }
    function tokenToString(t: SyntaxKind): string;
    function getPositionOfLineAndCharacter(sourceFile: SourceFile, line: number, character: number): number;
    function getLineAndCharacterOfPosition(sourceFile: SourceFile, position: number): LineAndCharacter;
    function isWhiteSpace(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function couldStartTrivia(text: string, pos: number): boolean;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[];
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[];
    /** Optionally, get the shebang */
    function getShebang(text: string): string;
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget): boolean;
    function getPreprocessorSymbols(): string[];
    function setPreprocessorSymbols(value: string[]): void;
    function createScanner(languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant, text?: string, onError?: ErrorCallback, start?: number, length?: number): Scanner;
}
declare module "yortus-typescript" {
    function getDefaultLibFileName(options: CompilerOptions): string;
    function textSpanEnd(span: TextSpan): number;
    function textSpanIsEmpty(span: TextSpan): boolean;
    function textSpanContainsPosition(span: TextSpan, position: number): boolean;
    function textSpanContainsTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlapsWith(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlap(span1: TextSpan, span2: TextSpan): TextSpan;
    function textSpanIntersectsWithTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanIntersectsWith(span: TextSpan, start: number, length: number): boolean;
    function decodedTextSpanIntersectsWith(start1: number, length1: number, start2: number, length2: number): boolean;
    function textSpanIntersectsWithPosition(span: TextSpan, position: number): boolean;
    function textSpanIntersection(span1: TextSpan, span2: TextSpan): TextSpan;
    function createTextSpan(start: number, length: number): TextSpan;
    function createTextSpanFromBounds(start: number, end: number): TextSpan;
    function textChangeRangeNewSpan(range: TextChangeRange): TextSpan;
    function textChangeRangeIsUnchanged(range: TextChangeRange): boolean;
    function createTextChangeRange(span: TextSpan, newLength: number): TextChangeRange;
    let unchangedTextChangeRange: TextChangeRange;
    /**
     * Called to merge all the changes that occurred across several versions of a script snapshot
     * into a single change.  i.e. if a user keeps making successive edits to a script we will
     * have a text change from V1 to V2, V2 to V3, ..., Vn.
     *
     * This function will then merge those changes into a single change range valid between V1 and
     * Vn.
     */
    function collapseTextChangeRangesAcrossMultipleVersions(changes: TextChangeRange[]): TextChangeRange;
    function getTypeParameterOwner(d: Declaration): Declaration;
    function getLanguageVersion(compilerOptions: CompilerOptions): LanguageVersion;
    function getPreprocessorSymbolsFromCompilerOptions(compilerOptions: CompilerOptions): string[];
    function toUpperSnakeCase(identifier: string): string;
}
declare module "yortus-typescript" {
    function getNodeConstructor(kind: SyntaxKind): new () => Node;
    function createNode(kind: SyntaxKind): Node;
    function forEachChild<T>(node: Node, cbNode: (node: Node) => T, cbNodeArray?: (nodes: Node[]) => T): T;
    function createSourceFile(fileName: string, sourceText: string, languageVersion: ScriptTarget, setParentNodes?: boolean): SourceFile;
    function updateSourceFile(sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
}
declare module "yortus-typescript" {
    const version: string;
    function findConfigFile(searchPath: string): string;
    function resolveTripleslashReference(moduleName: string, containingFile: string): string;
    function resolveModuleName(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost): ResolvedModule;
    function nodeModuleNameResolver(moduleName: string, containingFile: string, host: ModuleResolutionHost): ResolvedModule;
    function baseUrlModuleNameResolver(moduleName: string, containingFile: string, baseUrl: string, host: ModuleResolutionHost): ResolvedModule;
    function classicNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost): ResolvedModule;
    function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost;
    function getPreEmitDiagnostics(program: Program, sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
    function flattenDiagnosticMessageText(messageText: string | DiagnosticMessageChain, newLine: string): string;
    function createProgram(rootNames: string[], options: CompilerOptions, host?: CompilerHost, oldProgram?: Program): Program;
}
declare module "yortus-typescript" {
    function parseCommandLine(commandLine: string[], readFile?: (path: string) => string): ParsedCommandLine;
    /**
      * Read tsconfig.json file
      * @param fileName The path to the config file
      */
    function readConfigFile(fileName: string, readFile: (path: string) => string): {
        config?: any;
        error?: Diagnostic;
    };
    /**
      * Parse the text of the tsconfig.json file
      * @param fileName The path to the config file
      * @param jsonText The text of the config file
      */
    function parseConfigFileText(fileName: string, jsonText: string): {
        config?: any;
        error?: Diagnostic;
    };
    /**
      * Parse the contents of a config file (tsconfig.json).
      * @param json The contents of the config file to parse
      * @param basePath A root directory to resolve relative path entries in the config
      *    file to. e.g. outDir
      */
    function parseConfigFile(json: any, host: ParseConfigHost, basePath: string): ParsedCommandLine;
}
declare module "yortus-typescript" {
    /** The version of the language service API */
    let servicesVersion: string;
    interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): Node[];
        getStart(sourceFile?: SourceFile): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFile): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node;
        getLastToken(sourceFile?: SourceFile): Node;
    }
    interface Symbol {
        getFlags(): SymbolFlags;
        getName(): string;
        getDeclarations(): Declaration[];
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol;
        getApparentProperties(): Symbol[];
        getCallSignatures(): Signature[];
        getConstructSignatures(): Signature[];
        getStringIndexType(): Type;
        getNumberIndexType(): Type;
        getBaseTypes(): ObjectType[];
    }
    interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): Type[];
        getParameters(): Symbol[];
        getReturnType(): Type;
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface SourceFile {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
        getLineStarts(): number[];
        getPositionOfLineAndCharacter(line: number, character: number): number;
        update(newText: string, textChangeRange: TextChangeRange): SourceFile;
    }
    /**
     * Represents an immutable snapshot of a script at a specified time.Once acquired, the
     * snapshot is observably immutable. i.e. the same calls with the same parameters will return
     * the same values.
     */
    interface IScriptSnapshot {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Gets the TextChangeRange that describe how the text changed between this text and
         * an older version.  This information is used by the incremental parser to determine
         * what sections of the script need to be re-parsed.  'undefined' can be returned if the
         * change range cannot be determined.  However, in that case, incremental parsing will
         * not happen and the entire document will be re - parsed.
         */
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange;
        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }
    module ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
    interface PreProcessedFileInfo {
        referencedFiles: FileReference[];
        importedFiles: FileReference[];
        ambientExternalModules: string[];
        isLibFile: boolean;
    }
    interface HostCancellationToken {
        isCancellationRequested(): boolean;
    }
    interface LanguageServiceHost {
        getCompilationSettings(): CompilerOptions;
        getNewLine?(): string;
        getProjectVersion?(): string;
        getScriptFileNames(): string[];
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): IScriptSnapshot;
        getLocalizedDiagnosticMessages?(): any;
        getCancellationToken?(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        log?(s: string): void;
        trace?(s: string): void;
        error?(s: string): void;
        useCaseSensitiveFileNames?(): boolean;
        resolveModuleNames?(moduleNames: string[], containingFile: string): string[];
    }
    interface LanguageService {
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        getCompilerOptionsDiagnostics(): Diagnostic[];
        /**
         * @deprecated Use getEncodedSyntacticClassifications instead.
         */
        getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        /**
         * @deprecated Use getEncodedSemanticClassifications instead.
         */
        getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
        getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications;
        getCompletionsAtPosition(fileName: string, position: number): CompletionInfo;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;
        getQuickInfoAtPosition(fileName: string, position: number): QuickInfo;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan;
        getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan;
        getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems;
        getRenameInfo(fileName: string, position: number): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): RenameLocation[];
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getTypeDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        findReferences(fileName: string, position: number): ReferencedSymbol[];
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[];
        /** @deprecated */
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getNavigateToItems(searchValue: string, maxResultCount?: number): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions): number;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions): TextChange[];
        getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion;
        getEmitOutput(fileName: string): EmitOutput;
        getProgram(): Program;
        getSourceFile(fileName: string): SourceFile;
        dispose(): void;
    }
    interface Classifications {
        spans: number[];
        endOfLineState: EndOfLineState;
    }
    interface ClassifiedSpan {
        textSpan: TextSpan;
        classificationType: string;
    }
    interface NavigationBarItem {
        text: string;
        kind: string;
        kindModifiers: string;
        spans: TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }
    interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }
    interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }
    class TextChange {
        span: TextSpan;
        newText: string;
    }
    interface TextInsertion {
        newText: string;
        /** The position in newText the caret should point to after the insertion. */
        caretOffset: number;
    }
    interface RenameLocation {
        textSpan: TextSpan;
        fileName: string;
    }
    interface ReferenceEntry {
        textSpan: TextSpan;
        fileName: string;
        isWriteAccess: boolean;
    }
    interface DocumentHighlights {
        fileName: string;
        highlightSpans: HighlightSpan[];
    }
    module HighlightSpanKind {
        const none: string;
        const definition: string;
        const reference: string;
        const writtenReference: string;
    }
    interface HighlightSpan {
        fileName?: string;
        textSpan: TextSpan;
        kind: string;
    }
    interface NavigateToItem {
        name: string;
        kind: string;
        kindModifiers: string;
        matchKind: string;
        isCaseSensitive: boolean;
        fileName: string;
        textSpan: TextSpan;
        containerName: string;
        containerKind: string;
    }
    interface EditorOptions {
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
    }
    interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
        [s: string]: boolean | number | string;
    }
    interface DefinitionInfo {
        fileName: string;
        textSpan: TextSpan;
        kind: string;
        name: string;
        containerKind: string;
        containerName: string;
    }
    interface ReferencedSymbol {
        definition: DefinitionInfo;
        references: ReferenceEntry[];
    }
    enum SymbolDisplayPartKind {
        aliasName = 0,
        className = 1,
        enumName = 2,
        fieldName = 3,
        interfaceName = 4,
        keyword = 5,
        lineBreak = 6,
        numericLiteral = 7,
        stringLiteral = 8,
        localName = 9,
        methodName = 10,
        moduleName = 11,
        operator = 12,
        parameterName = 13,
        propertyName = 14,
        punctuation = 15,
        space = 16,
        text = 17,
        typeParameterName = 18,
        enumMemberName = 19,
        functionName = 20,
        regularExpressionLiteral = 21,
    }
    interface SymbolDisplayPart {
        text: string;
        kind: string;
    }
    interface QuickInfo {
        kind: string;
        kindModifiers: string;
        textSpan: TextSpan;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface RenameInfo {
        canRename: boolean;
        localizedErrorMessage: string;
        displayName: string;
        fullDisplayName: string;
        kind: string;
        kindModifiers: string;
        triggerSpan: TextSpan;
    }
    interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
    }
    /**
     * Represents a single signature to show in signature help.
     * The id is used for subsequent calls into the language service to ask questions about the
     * signature help item in the context of any documents that have been updated.  i.e. after
     * an edit has happened, while signature help is still active, the host can ask important
     * questions like 'what parameter is the user currently contained within?'.
     */
    interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
    }
    /**
     * Represents a set of signature help items, and the preferred item that should be selected.
     */
    interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }
    interface CompletionInfo {
        isMemberCompletion: boolean;
        isNewIdentifierLocation: boolean;
        entries: CompletionEntry[];
    }
    interface CompletionEntry {
        name: string;
        kind: string;
        kindModifiers: string;
        sortText: string;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: string;
        kindModifiers: string;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface OutliningSpan {
        /** The span of the document to actually collapse. */
        textSpan: TextSpan;
        /** The span of the document to display when the user hovers over the collapsed span. */
        hintSpan: TextSpan;
        /** The text to display in the editor for the collapsed region. */
        bannerText: string;
        /**
          * Whether or not this region should be automatically collapsed when
          * the 'Collapse to Definitions' command is invoked.
          */
        autoCollapse: boolean;
    }
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
    }
    const enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
    const enum EndOfLineState {
        None = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
        InTemplateHeadOrNoSubstitutionTemplate = 4,
        InTemplateMiddleOrTail = 5,
        InTemplateSubstitutionPosition = 6,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        StringLiteral = 7,
        RegExpLiteral = 8,
    }
    interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }
    interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }
    interface Classifier {
        /**
         * Gives lexical classifications of tokens on a line without any syntactic context.
         * For instance, a token consisting of the text 'string' can be either an identifier
         * named 'string' or the keyword 'string', however, because this classifier is not aware,
         * it relies on certain heuristics to give acceptable results. For classifications where
         * speed trumps accuracy, this function is preferable; however, for true accuracy, the
         * syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
         * lexical, syntactic, and semantic classifiers may issue the best user experience.
         *
         * @param text                      The text of a line to classify.
         * @param lexState                  The state of the lexical classifier at the end of the previous line.
         * @param syntacticClassifierAbsent Whether the client is *not* using a syntactic classifier.
         *                                  If there is no syntactic classifier (syntacticClassifierAbsent=true),
         *                                  certain heuristics may be used in its place; however, if there is a
         *                                  syntactic classifier (syntacticClassifierAbsent=false), certain
         *                                  classifications which may be incorrectly categorized will be given
         *                                  back as Identifiers in order to allow the syntactic classifier to
         *                                  subsume the classification.
         * @deprecated Use getLexicalClassifications instead.
         */
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean): ClassificationResult;
        getEncodedLexicalClassifications(text: string, endOfLineState: EndOfLineState, syntacticClassifierAbsent: boolean): Classifications;
    }
    /**
      * The document registry represents a store of SourceFile objects that can be shared between
      * multiple LanguageService instances. A LanguageService instance holds on the SourceFile (AST)
      * of files in the context.
      * SourceFile objects account for most of the memory usage by the language service. Sharing
      * the same DocumentRegistry instance between different instances of LanguageService allow
      * for more efficient memory utilization since all projects will share at least the library
      * file (lib.d.ts).
      *
      * A more advanced use of the document registry is to serialize sourceFile objects to disk
      * and re-hydrate them when needed.
      *
      * To create a default DocumentRegistry, use createDocumentRegistry to create one, and pass it
      * to all subsequent createLanguageService calls.
      */
    interface DocumentRegistry {
        /**
          * Request a stored SourceFile with a given fileName and compilationSettings.
          * The first call to acquire will call createLanguageServiceSourceFile to generate
          * the SourceFile if was not found in the registry.
          *
          * @param fileName The name of the file requested
          * @param compilationSettings Some compilation settings like target affects the
          * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
          * multiple copies of the same file for different compilation settings.
          * @parm scriptSnapshot Text of the file. Only used if the file was not found
          * in the registry and a new one was created.
          * @parm version Current version of the file. Only used if the file was not found
          * in the registry and a new one was created.
          */
        acquireDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string): SourceFile;
        /**
          * Request an updated version of an already existing SourceFile with a given fileName
          * and compilationSettings. The update will in-turn call updateLanguageServiceSourceFile
          * to get an updated SourceFile.
          *
          * @param fileName The name of the file requested
          * @param compilationSettings Some compilation settings like target affects the
          * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
          * multiple copies of the same file for different compilation settings.
          * @param scriptSnapshot Text of the file.
          * @param version Current version of the file.
          */
        updateDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string): SourceFile;
        /**
          * Informs the DocumentRegistry that a file is not needed any longer.
          *
          * Note: It is not allowed to call release on a SourceFile that was not acquired from
          * this registry originally.
          *
          * @param fileName The name of the file to be released
          * @param compilationSettings The compilation settings used to acquire the file
          */
        releaseDocument(fileName: string, compilationSettings: CompilerOptions): void;
        reportStats(): string;
    }
    module ScriptElementKind {
        const unknown: string;
        const warning: string;
        const keyword: string;
        const scriptElement: string;
        const moduleElement: string;
        const classElement: string;
        const localClassElement: string;
        const interfaceElement: string;
        const typeElement: string;
        const enumElement: string;
        const variableElement: string;
        const localVariableElement: string;
        const functionElement: string;
        const localFunctionElement: string;
        const memberFunctionElement: string;
        const memberGetAccessorElement: string;
        const memberSetAccessorElement: string;
        const memberVariableElement: string;
        const constructorImplementationElement: string;
        const callSignatureElement: string;
        const indexSignatureElement: string;
        const constructSignatureElement: string;
        const parameterElement: string;
        const typeParameterElement: string;
        const primitiveType: string;
        const label: string;
        const alias: string;
        const constElement: string;
        const letElement: string;
    }
    module ScriptElementKindModifier {
        const none: string;
        const publicMemberModifier: string;
        const privateMemberModifier: string;
        const protectedMemberModifier: string;
        const exportedModifier: string;
        const ambientModifier: string;
        const staticModifier: string;
        const abstractModifier: string;
    }
    class ClassificationTypeNames {
        static comment: string;
        static identifier: string;
        static keyword: string;
        static numericLiteral: string;
        static operator: string;
        static stringLiteral: string;
        static whiteSpace: string;
        static text: string;
        static punctuation: string;
        static className: string;
        static enumName: string;
        static interfaceName: string;
        static moduleName: string;
        static typeParameterName: string;
        static typeAliasName: string;
        static parameterName: string;
        static docCommentTagName: string;
    }
    const enum ClassificationType {
        comment = 1,
        identifier = 2,
        keyword = 3,
        numericLiteral = 4,
        operator = 5,
        stringLiteral = 6,
        regularExpressionLiteral = 7,
        whiteSpace = 8,
        text = 9,
        punctuation = 10,
        className = 11,
        enumName = 12,
        interfaceName = 13,
        moduleName = 14,
        typeParameterName = 15,
        typeAliasName = 16,
        parameterName = 17,
        docCommentTagName = 18,
    }
    interface DisplayPartsSymbolWriter extends SymbolWriter {
        displayParts(): SymbolDisplayPart[];
    }
    function displayPartsToString(displayParts: SymbolDisplayPart[]): string;
    function getDefaultCompilerOptions(): CompilerOptions;
    interface TranspileOptions {
        compilerOptions?: CompilerOptions;
        fileName?: string;
        reportDiagnostics?: boolean;
        moduleName?: string;
        renamedDependencies?: Map<string>;
    }
    interface TranspileOutput {
        outputText: string;
        diagnostics?: Diagnostic[];
        sourceMapText?: string;
    }
    function transpileModule(input: string, transpileOptions: TranspileOptions): TranspileOutput;
    function transpile(input: string, compilerOptions?: CompilerOptions, fileName?: string, diagnostics?: Diagnostic[], moduleName?: string): string;
    function createLanguageServiceSourceFile(fileName: string, scriptSnapshot: IScriptSnapshot, scriptTarget: ScriptTarget, version: string, setNodeParents: boolean): SourceFile;
    let disableIncrementalParsing: boolean;
    function updateLanguageServiceSourceFile(sourceFile: SourceFile, scriptSnapshot: IScriptSnapshot, version: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    function createGetCanonicalFileName(useCaseSensitivefileNames: boolean): (fileName: string) => string;
    function createDocumentRegistry(useCaseSensitiveFileNames?: boolean): DocumentRegistry;
    function preProcessFile(sourceText: string, readImportFiles?: boolean): PreProcessedFileInfo;
    function createLanguageService(host: LanguageServiceHost, documentRegistry?: DocumentRegistry): LanguageService;
    function createClassifier(): Classifier;
    /**
      * Get the path of the default library files (lib.d.ts) as distributed with the typescript
      * node package.
      * The functionality is not supported if the ts module is consumed outside of a node module.
      */
    function getDefaultLibFilePath(options: CompilerOptions): string;
}
