const presets: { [index: string]: any } = {
  rcc: {
    code: `import React, { Component } from 'react'

export default class $filename extends Component {
  render() {
    return <div>$filename</div>
  }
} `,
  },
  rce: {
    code: `import React, { Component } from 'react'

export class $filename extends Component {
  render() {
    return <div>$filename</div>
  }
}

export default $filename`,
  },
  rcep: {
    code: `import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class $filename extends Component {
  static propTypes = {}

  render() {
    return <div>$filename</div>
  }
}

export default $filename`,
  },
  rpc: {
    code: `import React, { PureComponent } from 'react'

export default class $filename extends PureComponent {
  render() {
    return <div>$filename</div>
  }
}`,
  },
  rpcp: {
    code: `import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class $filename extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$filename</div>
  }
}`,
  },
  rpce: {
    code: `import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class $filename extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$filename</div>
  }
}

export default $filename`,
  },
  rccp: {
    code: `import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class $filename extends Component {
  static propTypes = {
    item: PropTypes.any,
  }

  render() {
    return <div>$filename</div>
  }
}`,
  },
  rfcp: {
    code: `import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class $filename extends Component {
  static propTypes = {
    item: PropTypes.any,
  }

  render() {
    return <div>$filename</div>
  }
}`,
  },
  rfc: {
    code: `import React from 'react'

export default function $filename() {
  return <div>$filename</div>
}`,
  },
  rfce: {
    code: `import React from 'react'

function $filename() {
  return <div>$filename</div>
}

export default $filename`,
  },
  rafcp: {
    code: `import React from 'react'
import PropTypes from 'prop-types'

const $filename = (props) => {
  return <div>$filename</div>
}

$filename.propTypes = {}

export default $filename`,
  },
  rafc: {
    code: `import React from 'react'

export const $filename = () => {
  return <div>$filename</div>
}`,
  },
  rafce: {
    code: `import React from 'react'

const $filename = () => {
  return <div>$filename</div>
}

export default $filename`,
  },
  rmc: {
    code: `import React, { memo } from 'react'

export default memo(function $1() {
  return <div>$filename</div>
})`,
  },
  rmcp: {
    code: `import React, { memo } from 'react'
import PropTypes from 'prop-types'

const $filename = memo(function $filename(props) {
  return <div>$filename</div>
})

$filename.propTypes = {}

export default $filename`,
  },
  rcredux: {
    code: `import React, { Component } from 'react'
import { connect } from 'react-redux'

export class $filename extends Component {
  render() {
    return <div>$filename</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)($filename)`,
  },
  rcreduxp: {
    code: `import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class $filename extends Component {
  static propTypes = {
    item: PropTypes.any,,
  }

  render() {
    return <div>$filename</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)($filename)`,
  },
  rfcredux: {
    code: `import React, { Component } from 'react'
import { connect } from 'react-redux'

export const $filename = () => {
  return <div>$filename</div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)($filename)`,
  },
  rfreduxp: {
    code: `import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const $filename = () => {
  return <div>$filename</div>
}

$filename.propTypes = {
  item: PropTypes.any,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)($filename)`,
  },
  reduxmap: {
    code: `const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}`,
  },
};

export default presets;
